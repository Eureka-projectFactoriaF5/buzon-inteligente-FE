import React, { useState } from "react";
import { codesData } from "./mockData";
import PackageCard from "../../components/cards/PackageCard";
import AddPackageModal from "../../components/modals/AddPackageModal";

export default function PackageDashboard() {
  const [showModal, setShowModal] = useState(false);
  //TODO:get the data from the API
  const allPackages = codesData.flatMap((code) => code.packages);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 space-y-6">
   
      <h1 className="text-4xl font-bold text-blue-900">Hola, Juan</h1>

      <div className="w-full p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {allPackages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>

      <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700"
        >
          Añadir paquete
        </button>
      <AddPackageModal isOpen={showModal} onClose={() => setShowModal(false)} />

    </div>
  );
}
