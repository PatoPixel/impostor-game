import React, { useState, useEffect } from 'react';
import QRResultScreen from './QRResultScreen';

const QRScanner = ({ onClose }) => {
  const [scannedData, setScannedData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simular la detección de QR (en una implementación real usarías una librería como jsQR)
    const handleQRDetection = (event) => {
      try {
        // En una implementación real, aquí procesarías el QR escaneado
        // Por ahora, simulamos con datos de ejemplo
        const mockData = {
          playerId: 1,
          isImpostor: Math.random() > 0.8, // 20% chance de ser impostor
          word: Math.random() > 0.8 ? null : 'CAFÉ'
        };
        
        setScannedData(mockData);
      } catch (err) {
        setError('Error al procesar el código QR');
      }
    };

    // Simular detección después de 2 segundos
    const timer = setTimeout(() => {
      handleQRDetection();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (scannedData) {
    return <QRResultScreen playerData={scannedData} onClose={onClose} />;
  }

  return (
    <div className="screen-transition flex flex-col items-center justify-center min-h-screen">
      <div className="card max-w-lg mx-auto w-full text-center">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            📱 Escáner QR
          </h2>
          <p className="text-dark-300 text-lg mb-6">
            Apunta tu cámara al código QR
          </p>
          
          <div className="bg-dark-700/50 rounded-xl p-8 mb-6">
            <div className="w-64 h-64 mx-auto bg-dark-600 rounded-xl flex items-center justify-center mb-4">
              <div className="text-6xl">📷</div>
            </div>
            <p className="text-dark-300 text-sm">
              Simulando escaneo de QR...
            </p>
          </div>
          
          {error && (
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4 mb-6">
              <p className="text-red-300 text-sm">{error}</p>
            </div>
          )}
        </div>
        
        <button
          onClick={onClose}
          className="btn-secondary w-full text-lg py-4"
        >
          ← Volver
        </button>
      </div>
    </div>
  );
};

export default QRScanner;
