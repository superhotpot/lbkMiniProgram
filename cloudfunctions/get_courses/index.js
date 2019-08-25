// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database();
  const courses = await db.collection('courses').get();
  console.log('courses_result', courses);
  return courses;
}