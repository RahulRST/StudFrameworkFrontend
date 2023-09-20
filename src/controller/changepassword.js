import axios from "axios";
import { server_URL } from "./urls_config";
export default function change_pass() {
  document.getElementById("pass-fail").style.display = "none";
  document.getElementById("pass-mis").style.display = "none";
  document.getElementById("server-fail").style.display = "none";
  document.getElementById("pass-success").style.display = "none";
  const pcbtn = document.getElementById("pass-button");
  pcbtn.disabled = true;
  pcbtn.innerHTML = `<div class="spinner-border text-primary p-2 spinner-border-sm" role="status" aria-hidden="true"><span class="visually-hidden">Loading...</span></div>`;
  var oldPass = document.getElementById("old-pass").value;
  var newPass = document.getElementById("new-pass").value;
  var rePass = document.getElementById("re-pass").value;
  if (newPass == rePass) {
    let params = new URLSearchParams();
    params.append("newpass", newPass);
    params.append("oldpass", oldPass);
    params.append("email", localStorage.useremail);
    params.append("auth_token", localStorage.auth_token);
    axios.post(server_URL + "passchange", params).then((result) => {
      if (result.data == "pass-fail") {
        document.getElementById("pass-fail").style.display = "block";
        pcbtn.disabled = false;
        pcbtn.innerHTML = `Change Password`;
      } else if (result.data === "server-fail") {
        document.getElementById("server-fail").style.display = "block";
        pcbtn.disabled = false;
        pcbtn.innerHTML = `Change Password`;
      } else {
        document.getElementById("pass-success").style.display = "block";
        pcbtn.innerHTML = `Change Password`;
        pcbtn.disabled = false;
        window.location.href = URL + "Student#/auth/GeneralInformationdata";
      }
    });
  } else {
    document.getElementById("pass-mis").style.display = "block";
    pcbtn.disabled = false;
    pcbtn.innerHTML = `Change Password`;
  }
}
