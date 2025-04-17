const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const dateFormater = (dateString) => new Date (`${dateString}T00:00:00Z`);

const addStruk = async (data) => {
  try {

    const tanggalMasuk = dateFormater(data.tanggal_masuk);
    const tanggalKadaluarsa = dateFormater(data.tanggal_kadaluarsa); 
    const kadaluarsaBerikutnya = new Date(tanggalKadaluarsa);
    kadaluarsaBerikutnya.setMonth(kadaluarsaBerikutnya.getMonth() + data.untuk)
    const tanggalBayar = dateFormater(data.tanggal_bayar);

    const result = await prisma.struk.create({
      data:{
        nomor_polisi: data.nomor_polisi,
        nama_pemilik: data.nama_pemilik,
        tanggal_masuk: tanggalMasuk,
        tanggal_kadaluarsa: tanggalKadaluarsa,
        bulanan: data.bulanan,
        tanggal_bayar: tanggalBayar,
        untuk: data.untuk,
        jumlah_pembayaran: data.jumlah_pembayaran,
        keterangan: data.keterangan,
        kadaluarsa_berikutnya: kadaluarsaBerikutnya
      }
    })

    return {
      success: true,
      message: "Data created successfully",
      data: result
    }

  } catch (error) {
    console.error(error);
    return{
      success: false,
      message: "Failed creating data",
      error: error
    }
  }
}

const getStruk = async () => {
  try {
    // const formTable = form.t
    // const result = await prisma[formTable].findMany();
    const result = await prisma.struk.findMany();

    if(result.length === 0) {
      return {
        status: 404,
        message: "data not found"
      }
    }

    return {
      data: result,
      success: true
    };
  } catch (error) {
    console.error(error)
    return{
      error: error,
      message: "Failed to fetch data",
      success: false
    };
  } finally {
    await prisma.$disconnect();
  }
}

const updateStruk = async (data) => {
  try {
    
    const getAStruk = await prisma.struk.findUnique({
      where: {
        id: data.id
      }
    })

    const tanggalMasuk = data.tanggal_masuk ? dateFormater(data.tanggal_masuk) : getAStruk.tanggal_masuk;
    const tanggalKadaluarsa = data.tanggal_kadaluarsa ? dateFormater(data.tanggal_kadaluarsa) : getAStruk.tanggal_kadaluarsa; 
    const kadaluarsaBerikutnya = data.kadaluarsa_berikutnya ? dateFormater(data.kadaluarsa_berikutnya) : getAStruk.kadaluarsa_berikutnya;
    const tanggalBayar = data.tanggal_bayar ? dateFormater(data.tanggal_bayar) : getAStruk.tanggal_bayar;

    
    console.log(getAStruk)

    const result = await prisma.struk.update({
      where: {
        id: data.id
      },
      data: {
        has_printed: data.has_printed || getAStruk.has_printed,
        nomor_polisi: data.nomor_polisi || getAStruk.nomor_polisi,
        nama_pemilik: data.nama_pemilik || getAStruk.nama_pemilik,
        tanggal_masuk: tanggalMasuk,
        tanggal_kadaluarsa: tanggalKadaluarsa,
        bulanan: data.bulanan || getAStruk.bulanan,
        tanggal_bayar: tanggalBayar,
        untuk: data.untuk || getAStruk.untuk,
        jumlah_pembayaran: data.jumlah_pembayaran || getAStruk.jumlah_pembayaran,
        keterangan: data.keterangan || getAStruk.keterangan,
        kadaluarsa_berikutnya: kadaluarsaBerikutnya
      }
    })
    return{
      success: true,
      message: 'Data updated successfully',
      data: result
    }
  } catch (error) {
    console.error(error);
    return {
      message: error,
      success: false,
      data: null
    }
  }
}

module.exports = {
  addStruk,
  getStruk,
  updateStruk
}