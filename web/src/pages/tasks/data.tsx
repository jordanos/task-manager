export const data = {
  lanes: [
    {
      id: 'lane1',
      laneType: 'todo',
      title: 'To Do',
      label: '2/2',
      cards: [
        {
          id: 'Card1',
          title: 'Write Blog',
          description: 'Can AI make memes',
          label: '30 mins',
          draggable: true,
          onEdit: () => {
            console.log('pressed');
          },
        },
        {
          id: 'Card2',
          title: 'Write Blog',
          description: 'Can AI make memes',
          label: '30 mins',
          draggable: true,
        },
        {
          id: 'Card3',
          title: 'Write Blog',
          description: 'Can AI make memes',
          label: '30 mins',
          draggable: true,
        },
      ],
    },
    {
      id: 'lane2',
      laneType: 'progress',
      title: 'In Progress',
      label: '0/0',
      cards: [],
    },
    {
      id: 'lane3',
      laneType: 'done',
      title: 'Done',
      label: '0/0',
      cards: [],
    },
  ],
};
