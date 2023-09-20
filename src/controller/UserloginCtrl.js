import axios from "axios";
import { URL, server_URL } from "./urls_config";

export default function handleLogin() {
  const loginButton = document.getElementById("login_btn");
  loginButton.disabled = true;
  loginButton.innerHTML = `<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>`;
  document.getElementById("pass-fail").style.display = "none";
  document.getElementById("email-fail").style.display = "none";
  document.getElementById("server-fail").style.display = "none";

  let params = new URLSearchParams();
  params.append("email", document.getElementById("emailId").value);
  params.append("password", document.getElementById("password").value);

  axios.post(server_URL + "userlogin", params).then((result) => {
    // Check 1: email belongs to licet domain and user not present
    if (
      result.data == "user-fail" &&
      document.getElementById("emailId").value.includes("@licet.ac.in")
    ) {
      window.location.href = URL + "Student#/auth/GeneralInformationdata";
    }

    // Check 2: invalid user
    else if (result.data === "user-fail") {
      document.getElementById("email-fail").style.display = "block";
      localStorage.setItem("auth_token", -1);
      loginButton.disabled = false;
      loginButton.innerHTML = `Login`;

      // Check 3: invalid password
    } else if (result.data === "pass-fail") {
      console.log("Incorrect password");
      document.getElementById("pass-fail").style.display = "block";
      localStorage.setItem("auth_token", -1);
      loginButton.disabled = false;
      loginButton.innerHTML = `Login`;

      // Server Issue
    } else if (result.data === "server-down") {
      localStorage.setItem("auth_token", -1);
      document.getElementById("server-fail").style.display = "block";
      loginButton.disabled = false;
      loginButton.innerHTML = `Login`;
    }
    // Logged In
    else {
      console.log("Logged In");
      var check = result.data[0];
      console.log(check);
      if (check.user_type == 2) {
        localStorage.setItem("dept", check.dept);
        window.location.href = URL + "HoD#/admin2/GeneralInformation";
      } else if (check.user_type == 1) {
        localStorage.setItem("batch", check.batch);
        localStorage.setItem("dept", check.dept);
        window.location.href = URL + "Class-Advisor#/admin1/GeneralInformation";
      } else if (check.user_type == 3) {
        window.location.href = URL + "LICET#/admin3/GeneralInformation";
      } else if (check.user_type == 0) {
        if (check.roll_no == null) {
          console.log(check.roll_no);
          window.location.href = URL + "Student#/auth/GeneralInformationdata";
        } else {
          localStorage.setItem("StudentRoll", check.roll_no);
          window.location.href = URL + "Student#/admin0/GeneralInformation";
        }
      }
      localStorage.setItem("useremail", result.data[0].email);
      localStorage.setItem("auth_token", result.data[0].auth_token);
      localStorage.setItem("user_name", result.data[0].user_name);
      loginButton.disabled = false;
      loginButton.innerHTML = `Login`;
    }
  });
  /*    .catch((err) => {
      document.getElementById("pass-fail").classList.add("d-none");
      document.getElementById("email-fail").classList.add("d-none");
      document.getElementById("server-fail").classList.remove("d-none");
    }); */
}
