import React from 'react';

const RentalForm = () => {
  return (
     <div className="flex flex-col lg:flex-row justify-between p-6 bg-gray-100 min-h-screen">
      {/* Billing Info */}
      <div className="bg-white rounded-lg shadow-lg p-6 m-4 flex-1">
        <h2 className="text-2xl font-bold mb-4">Billing Info</h2>
        <p className="text-gray-500 mb-6">Masukan Data anda.</p>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nama</label>
              <input
                type="text"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-yellow-100"
                placeholder="Nama"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">No. HP</label>
              <input
                type="text"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-yellow-100"
                placeholder="No. HP"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Alamat</label>
              <input
                type="text"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-yellow-100"
                placeholder="Alamat"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Kota</label>
              <input
                type="text"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-yellow-100"
                placeholder="Kota"
              />
            </div>
          </div>
        </form>
      </div>

      {/* Data Rental */}
      <div className="bg-white rounded-lg shadow-lg p-6 m-4 flex-1">
        <h2 className="text-2xl font-bold mb-4">Data Rental</h2>
        <p className="text-gray-500 mb-6">Pilih tanggal rental anda.</p>
        <form>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input type="radio" className="form-radio" name="pickupDropoff" value="pickup" />
              <span className="ml-2">Penjemputan</span>
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Lokasi</label>
              <select className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-yellow-100">
                <option>Pilih Kota</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Tanggal</label>
              <input
                type="date"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-yellow-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Jam</label>
              <select className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-yellow-100">
                <option>Pilih Jam</option>
              </select>
            </div>
          </div>
          <div className="mt-4 mb-4">
            <label className="inline-flex items-center">
              <input type="radio" className="form-radio" name="pickupDropoff" value="dropoff" />
              <span className="ml-2">Drop - Off</span>
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Lokasi</label>
              <select className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-yellow-100">
                <option>Pilih Kota</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Tanggal</label>
              <input
                type="date"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-yellow-100"
              />
            </div>
          </div>
        </form>
      </div>

      {/* Rental Detail */}
      <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-full lg:w-1/3">
        <h2 className="text-2xl font-bold mb-4">Rental Detail</h2>
        <p className="text-gray-500 mb-6">Harga bisa berubah ubah sesuai ketentuan.</p>
        <div className="flex items-center mb-4">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.Pd58SaNafpTP8-odiUYHnQHaEK&pid=Api&P=0&h=180" // Ganti dengan URL gambar yang sesuai
            alt="All New Avanza"
            className="w-24 h-24 object-cover rounded-lg"
          />
          <div className="ml-4">
            <h3 className="text-xl font-bold">All New Avanza</h3>
            <p className="text-gray-500">Toyota</p>
            <p className="text-lg font-semibold text-gray-900">Rp. 350.000</p>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between">
            <p className="text-gray-500">Subtotal</p>
            <p className="text-gray-900">Rp. 350.000</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500">Tax</p>
            <p className="text-gray-900">0</p>
          </div>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Masukkan Kode Promo"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-yellow-100"
          />
          <button className="mt-2 w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600">
            Apply now
          </button>
        </div>
        <div className="flex justify-between font-bold text-xl">
          <p>Total Harga</p>
          <p>350.000</p>
        </div>
        <p className="text-gray-500 mt-2">Harga sudah termasuk diskon.</p>
        <div className="mt-6">
          <h4 className="text-lg font-bold">Deskripsi Mobil</h4>
          <p className="text-gray-700 mt-2">
            The All New Avanza offers a comfortable and reliable driving experience. With its sleek design and advanced features, it is perfect for both city driving and long-distance trips. Enjoy ample space, modern amenities, and excellent fuel efficiency with the All New Avanza.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RentalForm;
