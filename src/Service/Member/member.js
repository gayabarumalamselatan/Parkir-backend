const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const addMember = async (data) => {
  
  try {
    const tanggalMasuk = new Date(`${data.tanggal_masuk}T00:00:00Z`); // Set the date from input
    const tanggalKadaluarsa = new Date(tanggalMasuk); // Create a new date object based on tanggalMasuk
    tanggalKadaluarsa.setMonth(tanggalKadaluarsa.getMonth() + 1)

    await prisma.member.create({
      data:{
        nomor_polisi: data.nomor_polisi,
        nomor_pengganti: data.nomor_pengganti,
        nama_pemilik: data.nama_pemilik,
        nomor_hp: data.nomor_hp,
        tanggal_masuk: tanggalMasuk,
        tanggal_kadaluarsa: tanggalKadaluarsa,
        bulanan: data.bulanan,
        keterangan: data.keterangan
      }
    })
    return {
      success: true,
      message: "Data created successfully"
    }
  } catch (error) {
    console.error(error)
    return {
      success: false,
      message: "Failed creating data",
      error: error
    }
  }
}

const getMember = async (params) => {
  try {
    const formattedParams = {...params}
    if(formattedParams.id){
      formattedParams.id = parseInt(formattedParams.id, 10)
    }

    const members = await prisma.member.findMany({
      where: {
        ...formattedParams
      }
    })

    if(members.length === 0) {
      return {
        status: 404,
        message: "data not found"
      }
    }

    return members
  } catch (error) {
    console.error(error)
    return{
      status: 500,
      message: error
    };
  } finally {
    await prisma.$disconnect();
  }
}

const updateMember = async (params) => {
  try {
    await prisma.member.update({
      where:{
        id: params.id
      },
      data: {
        nomor_polisi: params.nomor_polisi,
        nomor_pengganti: params.nomor_pengganti,
        nama_pemilik: params.nama_pemilik,
        nomor_hp: params.nomor_hp,
        tanggal_masuk: params.tanggal_masuk,
        bulanan: params.bulanan,
        keterangan: params.keterangan
      }
    })
    return {
      success: true,
      message: 'Data updated successfully'
    }
  } catch (error) {
    console.error(error)
    return {
      success: false,
      message: error
    }
  }
}

const deleteMember = async (id) => {
  try {
    await prisma.member.delete({
      where: {
        id: id
      }
    })
    return {
      success: true,
      message: "Data deleted successfully"
    }
  } catch (error) {
    console.error(error)
    return {
      success: false,
      message: error
    }
  }
}

module.exports = {
  addMember,
  getMember,
  updateMember,
  deleteMember
}