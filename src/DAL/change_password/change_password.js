import { invokeApi } from "../../bl_libs/invokeApi";

export const Change_Password = data => {
  let requestObj = {
    path: "/api/admin/admin_change_password",
    method: "POST",
    headers: {
      "x-sh-auth": localStorage.getItem("token")
    }
  };
  requestObj["postData"] = data;
  return invokeApi(requestObj);
};
