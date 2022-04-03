import { Task } from 'shared/store/reducers/taskReducer';

type Card = {
  id: string;
  title: string;
  description: string;
  date: string;
  label: string;
  draggable: boolean;
  onEdit: Function;
  onDelete: Function;
};

class BoardController {
  todoCards: Card[] = [];

  progressCards: Card[] = [];

  doneCards: Card[] = [];

  constructor(
    private tasks: Task[],
    private onEdit: Function,
    private onDelete: Function
  ) {
    this.tasks = tasks;
    this.onEdit = onEdit;
    // initialize
    tasks.forEach((task: Task) => this.addTask(task));
  }

  changeTaskToCard = (task: Task): Card => {
    const card: Card = {
      id: task.id,
      title: task.title,
      description: task.description,
      date: task.date,
      label: 'new',
      draggable: true,
      onEdit: this.onEdit,
      onDelete: this.onDelete,
    };

    return card;
  };

  addTask = (task: Task) => {
    switch (task.status) {
      case 'todo':
        this.todoCards.push(this.changeTaskToCard(task));
        return;
      case 'progress':
        this.progressCards.push(this.changeTaskToCard(task));
        return;
      case 'done':
        this.doneCards.push(this.changeTaskToCard(task));
        return;
      default:
        this.todoCards.push(this.changeTaskToCard(task));
    }
  };

  getBoard = () => {
    const data = {
      lanes: [
        {
          id: 'lane1',
          type: 'todo',
          title: `ToDo  ${this.todoCards.length}`,
          label: '2/2',
          cards: [...this.todoCards],
        },
        {
          id: 'lane2',
          type: 'progress',
          title: `In Progress  ${this.progressCards.length}`,
          label: '0/0',
          disallowAddingCard: true,
          cards: [...this.progressCards],
        },
        {
          id: 'lane3',
          type: 'done',
          title: `Done  ${this.doneCards.length}`,
          label: '0/0',
          disallowAddingCard: true,
          cards: [...this.doneCards],
        },
      ],
    };

    return data;
  };
}

export default BoardController;
