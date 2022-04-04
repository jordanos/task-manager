/* eslint-disable @typescript-eslint/default-param-last */
export type Task = {
  id: string;
  title: string;
  description: string;
  date: Date;
  status: 'todo' | 'progress' | 'done';
  assignedTo: string;
};

interface TaskState {
  tasks: Task[];
  editableTask: Task;
}

const initialState: TaskState = {
  tasks: [
    {
      id: 'string',
      title: 'string',
      description: 'string',
      date: new Date(),
      status: 'todo',
      assignedTo: 'string',
    },
  ],
  editableTask: {
    id: '',
    title: '',
    description: '',
    date: new Date(),
    status: 'todo',
    assignedTo: '',
  },
};

function taskReducer(
  state = initialState,
  action: { type: string; payload: Task }
) {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'PRE_EDIT':
      return {
        ...state,
        editableTask: { ...state.editableTask, ...action.payload },
      };
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id !== action.payload.id) return task;
          return { ...action.payload };
        }),
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => {
          return task.id !== action.payload.id;
        }),
      };
    default:
      return state;
  }
}

export default taskReducer;
