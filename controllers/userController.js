import routes from '../routes';

export const getJoin = (req, res) => res.render('join', { pageTitle: 'Join' });

export const postJoin = (req, res) => {
  const {
    body: { name, email, password1, password2 }
  } = req;
  if (password1 !== password2) {
    res.status(400);
    res.render('join', { pageTitle: 'Join' });
  } else {
    // TODO: Register User
    // TODO: Log User In
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) =>
  res.render('login', { pageTitle: 'Login' });
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) =>
  res.render('logout', { pageTitle: 'Logout' });

export const userDetail = (req, res) =>
  res.render('userDetail', { pageTitle: 'User Detail' });

export const editProfile = (req, res) =>
  res.render('editProfile', { pageTitle: 'Edit Profile' });

export const changePassword = (req, res) =>
  res.render('changePassword', { pageTitle: 'Change Password' });