const request = require('superagent');

// const BASE_URL = 'http://159.203.17.226:3000';
const BASE_URL = 'http://localhost:3000';

const agent = {
  login: (email, password) => {
    console.log(`loggingin with email ${email}`)
    return request.post(`${BASE_URL}/user/login`)
      .set('Accept', 'application/json')
      .set('Access-Control-Allow-Headers', true)
      .set('Access-Control-Allow-Origin', '*')
      .send({
        email: email,
        password: password
      })
      .accept('application/json')
  },
  logout: (token) => {
    console.log(`loggingout with token ${token}`)
    return request.post(`${BASE_URL}/user/logout`)
      .set('Accept', 'application/json')
      .set('x-auth', token.toString())
      .then((res) => {
        console.log(res);
      }).catch((err) => {
      console.log(err);
    })
  },

  signup: (body) => {
    request.post(`${BASE_URL}/signup`)
      .set('Accept', 'application/json')
      .send(body)
      .then((res) => {
        console.log(res);
      }).catch((err) => {
      console.log(err);
    })
  },
  updateUser: (token, body) => {
    request.put(`${BASE_URL}/user`)
      .set('Accept', 'application/json')
      .set('x-auth', token)
      .send(body)
      .then((res) => {
        console.log(res.body);
      }).catch((err) => {
      console.log(err);
    });
  },
  getUser: (token) => {
    request.get(`${BASE_URL}/user`)
      .set('Accept', 'application/json')
      .set('x-auth', token)
      .then((res) => {
        console.log(res.status);
        console.log(res.headers);
        console.log(res.body);
      }).catch((err) => {
      console.log(err);
    });
  },

  createTodoList: (token, body) => {
    request.post(`${BASE_URL}/createnewlist`)
      .set('Accept', 'application/json')
      .set('x-auth', token)
      .send(body)
      .then((res) => {
        console.log(res);
      }).catch((err) => {
      console.log(err);
    });
  },
  getTodolists: (token) => {
    return request.get(`${BASE_URL}/`)
      .set('Accept', 'application/json')
      .set('x-auth', token)
      .then((res) => res)
  },
  updateTodolist: (token, listid, body) => {
    request.put(`${BASE_URL}/todolist/`)
      .set('Accept', 'application/json')
      .set('x-auth', token)
      .send(body)
      .then((res) => {
        console.log(res.body);
      }).catch((err) => {
      console.log(err);
    })
  },
  deleteTodolist: (token, body) => {
    request.delete(`${BASE_URL}/todolist/`)
      .set('Accept', 'application/json')
      .set('x-auth', token)
      .send(body)
      .then((res) => {
        console.log(res);
      }).catch((err) => {
      console.log(err);
    })
  },
}

export default agent;
