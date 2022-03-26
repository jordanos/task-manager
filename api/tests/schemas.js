exports.taskSchema = {
  title: expect.any(String),
  desc: expect.any(String),
  start: expect.any(String),
  end: expect.any(String),
  createdAt: expect.any(String),
  isDone: expect.any(Boolean),
  owner: expect.any(String),
};

exports.userSchema = {
  name: expect.any(String),
  email: expect.any(String),
  createdAt: expect.any(String),
};

exports.adminSchema = {
  canRead: expect.any(Boolean),
  canWrite: expect.any(Boolean),
  canAddAdmin: expect.any(Boolean),
  canRemoveAdmin: expect.any(Boolean),
  owner: expect.any(String),
};
