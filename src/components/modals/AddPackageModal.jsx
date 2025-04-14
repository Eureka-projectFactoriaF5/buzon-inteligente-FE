import React, { useState } from "react";

export default function AddPackageModal({ isOpen, onClose, onAddCode }) {
  const [orderName, setOrderName] = useState("");
  const [packages, setPackages] = useState([]);
  const [packageCounter, setPackageCounter] = useState(1);
  const orderCode = `ORD-${Date.now()}`;
  const createdAt = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

  if (!isOpen) return null;

  const handleAddPackage = () => {
    if (orderName.trim() === "") return;

    const newPackage = {
      id: Date.now() + packageCounter,
      name: orderName,
      collected: false,
      code: `PKG${String(packageCounter).padStart(3, "0")}`,
    };

    setPackages([...packages, newPackage]);
    setPackageCounter(packageCounter + 1);
    setOrderName("");
  };

  const handleGenerate = () => {
    const newCodeEntry = {
      code: orderCode,
      createdAt,
      packages,
    };

    console.log("Nuevo pedido generado:", newCodeEntry);

    if (onAddCode) onAddCode(newCodeEntry);

    setPackages([]);
    setPackageCounter(1);
    setOrderName("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-blue-300 p-6 rounded-2xl shadow-lg w-lg relative flex flex-col justify-center items-center gap-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-6 text-gray-600 hover:text-red-500 text-4xl"
        >
          ×
        </button>

        <h2 className="text-xl font-bold mb-4 mt-10">Nuevo Paquete</h2>

        <input
          type="text"
          placeholder="Nombre del paquete"
          className="w-full mb-4 px-3 py-2 bg-white outline-none focus:ring-0 border-none shadow-none rounded"
          value={orderName}
          onChange={(e) => setOrderName(e.target.value)}
        />

        <div className="flex justify-evenly w-full mb-6 text-white">
          <button
            onClick={handleAddPackage}
            className="bg-blue-800 p-4 rounded-lg hover:bg-blue-200"
          >
            Añadir paquete
          </button>
          <button
            onClick={handleGenerate}
            className="bg-blue-800 p-4 rounded-lg hover:bg-blue-200"
          >
            Generar código
          </button>
        </div>

        {packages.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">Paquetes añadidos:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {packages.map((pkg) => (
                <li key={pkg.id}>
                  {pkg.name} <span className="text-gray-500 text-sm">({pkg.code})</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

