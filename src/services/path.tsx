const baseUrl = 'http://ims-api.viendong.edu.vn/api/v1';
const abstractInfraBaseUrl = 'http://157.245.157.77:8282';
const lecture = 'giangvien';

export default {
  user: {
    login: `${baseUrl}/login`,
    regToken: `${baseUrl}/tokendevice/dangky`,
    infor: `${baseUrl}/user/info`,
    updateInfor: `${baseUrl}/user/info/update`,
    resetPassword: `${baseUrl}/user/forgetpass`,
    register: `${baseUrl}/register`,
  },
  student: {
    timetable: {
      semester: `${baseUrl}/hocky`,
      daily: (date: any) => `${baseUrl}/hocvien/tkbtheongay?ngay=${date}`,
      semesterTimetable: (semID: any) =>
        `${baseUrl}/hocvien/tkbtheohocky?hockyid=${semID}`,
    },
    examSchedule: {
      get: (date: any) => `${baseUrl}/hocvien/lichthi?ngayBD=${date}`,
    },
    registerSubject: {
      list: (semID: any) => `${baseUrl}/hocvien/dotdangky?hockyid=${semID}`,
      available: (semID: any) => `${baseUrl}/hocvien/monhocdukien?hockyid=${semID}`,
    },
    classManager: {
      list: (semID: any) => `${baseUrl}/hocvien/lopmonhoc/?hockyid=${semID}`,
      attendace: (lmhid: any) => `${baseUrl}/hocvien/lopmonhoc/buoihoc?lmhid=${lmhid}`,
    },
    mark: {
      overview: `${baseUrl}/hocvien/thongkectdt`,
      general: `${baseUrl}/hocvien/bangdiemtongket`,
      detail: (semID: any) => `${baseUrl}/hocvien/bangdiemhocky?hocKyId=${semID}`,
      ctdt: `${baseUrl}/hocvien/chitietctdt`,
    },
    tuition: {
      get: `${baseUrl}/hocvien/hocphi`,
      fee: `${baseUrl}/hocvien/lephi`,
    },
    attends: (classID: any, studentID: any) =>
      `${baseUrl}/${lecture}/diemdanh/hocvien/chitiet?lopid=${classID}&hocvienid=${studentID}`,
  },
  lecturer: {
    timetable: {
      daily: (date: any) => `${baseUrl}/${lecture}/tkbtheongay?ngay=${date}`,
      weekly: (start: any, end: any) =>
        `${baseUrl}/${lecture}/tkbtheotuan?tungay=${start}&denngay=${end}`,
      semester: (semID: any) => `${baseUrl}/${lecture}/tkbtheohocky?hockyid=${semID}`,
      semesterList: `${baseUrl}/hocky`,
      diss: `${baseUrl}/${lecture}/tkbbaonghi`,
      getRegSlot: (date: any) => `${baseUrl}/${lecture}/dangkylichday?ngaybd=${date}`,
      extraSlot: `${baseUrl}/${lecture}/tkbdangkydaybu`,
    },
    attendance: {
      list: `${baseUrl}/${lecture}/diemdanh/danhsach`,
      save: `${baseUrl}/${lecture}/diemdanh/luu`,
      delete: (studentID: any) => `${baseUrl}/${lecture}/diemdanh/xoa/${studentID}`,
    },
    classes: {
      list: (semesterID: any) =>
        `${baseUrl}/${lecture}/danhsachlop?hockyid=${semesterID}`,
      studentList: (classID: any) =>
        `${baseUrl}/${lecture}/danhsachhocvien?lopmonhocid=${classID}`,
      attendList: (classID: any) =>
        `${baseUrl}/${lecture}/diemdanh/danhsachtonghop?lopid=${classID}`,
      slotList: (classID: any) =>
        `${baseUrl}/${lecture}/diemdanh/lopmonhoc/danhsachbuoihoc?lopid=${classID}`,
    },
  },

  mark: {
    overview: `${baseUrl}/hocvien/thongkectdt`,
    general: `${baseUrl}/hocvien/bangdiemtongket`,
    detail: (semID: any) => `${baseUrl}/hocvien/bangdiemhocky?hocKyId=${semID}`,
    ctdt: `${baseUrl}/hocvien/chitietctdt`,
  },

//   application: {
//     submit: `${config.outDomain}/form`,
//     email: `${baseUrl}/hocvien/guidon`,
//   },
//   version: {
//     getIOS: `${config.outDomain}/version/ios/student`,
//     getAndroid: `${config.outDomain}/version/android/student`,
//   },
  abstract: {
    user: {
      fcmRegister: `${abstractInfraBaseUrl}/FcmToken/register`,
    },
    notification: {
      get: (userID: any) => `${abstractInfraBaseUrl}/notification?userID=${userID}`,
    },
  },
};
