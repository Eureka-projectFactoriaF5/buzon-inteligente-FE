import React from "react";
import Img from "../../assets/logoEureka.png";

export default function PackageDetailsModal({ pkg, isOpen, onClose }) {
  if (!isOpen || !pkg) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">

      <div className="bg-blue-300  rounded-xl shadow-lg max-w-xl w-full relative">

        <h2 className="text-2xl font-bold mb-6 text-white text-center bg-blue-900 rounded-t-xl p-4">
          {pkg.name}
        </h2>

        <div className="flex gap-10 mb-6 p-10">
  
          <div className="w-1/2">
            <img
              src={Img}
              alt="Foto del paquete"
              className="w-full h-auto rounded-md"
            />
          </div>


          <div className="w-1/2 text-blue-800 space-y-3">
            <p><strong>Código:</strong> {pkg.code}</p>
            <p><strong>Fecha de entrega:</strong> {pkg.deliveryDate || "Sin definir"}</p>
            <p><strong>Estado:</strong> {pkg.collected ? "Recogido" : "Pendiente"}</p>
          </div>

        </div>

        <div className="text-center mb-6">
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Volver
          </button>
        </div>

      </div>
    </div>
  );
}
