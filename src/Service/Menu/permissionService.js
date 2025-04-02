const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getPermissionList = async (params) => {

  const formattedParams = {...params}

  if(formattedParams.id){
    formattedParams.id = parseInt(formattedParams.id, 10);
  };

  const permissionData = await prisma.permission.findMany({
    where: {
      ...formattedParams
    }
  })
  if (permissionData === 0) {
    return {
      status: 404,
      message: 'Data not found'
    }
  }
  return permissionData
}

const createPermission = async (body) => {
  const isPermissionAvailable = await prisma.permission.findMany({
    where: {
      role_id: body.role_id,
      module_id: body.module_id,
      menu_id: body.menu_id
    }
  });
  if(isPermissionAvailable.length > 0){
    return {
      success: false,
      message: "Permission is already created"
    }
  } else {
    try {
      await prisma.permission.create({
        data: {
          role_id: body.role_id,
          module_id: body.module_id,
          menu_id: body.menu_id
        }
      });
      return {
        success: true,
        message: "Permission is successfully created"
      }
    } catch (error) {
      return {
        success: false,
        message: error
      }
    }
  }
}

const updatePermission = async (body) => {
  const isPermissionAvailable = await prisma.permission.findMany({
    where: {
      role_id: body.role_id,
      module_id: body.module_id,
      menu_id: body.menu_id
    }
  });
  if(isPermissionAvailable.length > 0){
    return {
      success: false,
      message: "Permission is already created"
    }
  } else {
    try {
      await prisma.permission.update({
        where: {
          id: body.id
        },
        data: {
          role_id: body.role_id,
          module_id: body.module_id,
          menu_id: body.menu_id
        }
      })
      return {
        success: true,
        message: "Permission successfully updated."
      }
    } catch (error) {
      return {
        success: false,
        message: error
      }
    }
  }
}

const deletePermission = async (id) => {
  try {
    await prisma.permission.delete({
      where: {
        id: id
      }
    })
    return {
      success: true,
      message: "Permission is successfully deleted."
    }
  } catch (error) {
    return {
      success: false,
      messgae: "Failed to delete permission"
    }
  }
}

module.exports = {
  getPermissionList,
  createPermission,
  updatePermission,
  deletePermission
}