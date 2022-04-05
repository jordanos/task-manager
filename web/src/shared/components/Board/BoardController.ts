import { Task } from 'shared/store/reducers/taskReducer';

export type Card = {
  id: string;
  task: Task;
  draggable: boolean;
  onEdit: Function | null;
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
      task,
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
    const board = {
      lanes: [
        {
          id: 'todo',
          type: 'todo',
          title: `ToDo  ${this.todoCards.length}`,
          label: '2/2',
          cards: [...this.todoCards],
        },
        {
          id: 'progress',
          type: 'progress',
          title: `In Progress  ${this.progressCards.length}`,
          label: '0/0',
          disallowAddingCard: true,
          cards: [...this.progressCards],
        },
        {
          id: 'done',
          type: 'done',
          title: `Done  ${this.doneCards.length}`,
          label: '0/0',
          disallowAddingCard: true,
          cards: [...this.doneCards],
        },
      ],
    };

    return board;
  };
}

export default BoardController;
