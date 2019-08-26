// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database();
  const { tab_id } = event;
  let courses;
  if (tab_id === 1) {
    courses = await db.collection('courses').where({
      is_hot: true,
    }).get();
  }
  if (tab_id === 2) {
    courses = await db.collection('courses').where({
      type: "图形化编程",
    }).get();
  }
  if (tab_id === 3) {
    courses = await db.collection('courses').where({
      type: "计算机基础",
    }).get();
  }
  return courses;
}