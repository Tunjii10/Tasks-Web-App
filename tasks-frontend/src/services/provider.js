import axios from "axios";
import Auth from "./auth";

export default class Provider {
  // get users tasks
  static async getUserTasks() {
    try {
      const UserTasks = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/user/tasks`,
        {
          headers: Auth(),
        }
      );
      return UserTasks.data.result;
    } catch (err) {
      return { error: err.message };
    }
  }

  //user login
  static async Login(UserData) {
    try {
      const UserCredentials = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/user/login`,
        {
          email: UserData.email,
          password: UserData.password,
        }
      );
      if (UserCredentials.status === 200) {
        localStorage.setItem("token", UserCredentials.data.access_token);
        return UserCredentials.data.results;
      }
    } catch (err) {
      return { error: err.message };
    }
  }

  //user signup
  static async SignUp(UserData) {
    try {
      const UserCredentials = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/user/new`,
        {
          firstname: UserData.firstname,
          othernames: UserData.othernames,
          email: UserData.email,
          password: UserData.password,
          phone: UserData.phone,
        }
      );
      if (UserCredentials.status === 200) {
        localStorage.setItem("token", UserCredentials.data.access_token);
        return UserCredentials.data.results;
      }
    } catch (err) {
      return { error: err.message };
    }
  }

  //user logout
  static async LogOut() {
    try {
      const UserCredentials = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/user/logout`,
        {
          headers: Auth(),
        }
      );
      if (UserCredentials.status === 200) {
        localStorage.removeItem("token");
      }
    } catch (err) {
      return { error: err.message };
    }
  }

  //user delete
  static async deleteUser(id) {
    try {
      const UserCredentials = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}api/user/delete/${id}`,
        { headers: Auth() }
      );
      if (UserCredentials.status === 200) {
        localStorage.removeItem("token");
      }
    } catch (err) {
      return { error: err.message };
    }
  }

  //create task
  static async newTask(UserData) {
    try {
      const UserCredentials = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/tasks/new`,
        {
          title: UserData.title,
          description: UserData.description,
          comment: UserData.comment,
          status: "todo",
          planned_stop_date: UserData.planned_stop_date,
          actual_stop_date: UserData.actual_stop_date,
        },
        { headers: Auth() }
      );
      if (UserCredentials.status === 200) {
        return UserCredentials.data.message;
      }
    } catch (err) {
      return { error: err.message };
    }
  }

  // edit task
  static async editTask(id, UserData) {
    try {
      const UserCredentials = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/api/tasks/edit/${id}`,
        {
          title: UserData.title,
          description: UserData.description,
          comment: UserData.comment,
          status: UserData.status,
          planned_stop_date: UserData.planned_stop_date,
          actual_stop_date: UserData.actual_stop_date,
        },
        { headers: Auth() }
      );
      if (UserCredentials.status === 200) {
        return UserCredentials.data.message;
      }
    } catch (err) {
      return { error: err.message };
    }
  }

  //delete task
  static async deleteTask(id) {
    try {
      const UserCredentials = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/api/tasks/delete/${id}`,
        { headers: Auth() }
      );
      if (UserCredentials.status === 200) {
        return UserCredentials.data.message;
      }
    } catch (err) {
      return { error: err.message };
    }
  }

  //show task
  static async showTask(id) {
    try {
      const UserCredentials = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/tasks/${id}`,
        {
          headers: Auth(),
        }
      );
      if (UserCredentials.status === 200) {
        return UserCredentials.data.result;
      }
    } catch (err) {
      return { error: err.message };
    }
  }
}
