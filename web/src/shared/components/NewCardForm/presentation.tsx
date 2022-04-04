import React, { FormEventHandler, MouseEventHandler } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Task } from 'shared/store/reducers/taskReducer';
import { colors } from 'shared/utils/Styles';
import Button from '../Button';
import Form from '../Form';
import TextInput from '../Form/TextInput';
import StyledWrapper from '../Wrappers/Styles';

interface PropsInterface {
  task: Task;
  updateTask: Function;
  onCancel: MouseEventHandler;
  handleSubmit: FormEventHandler;
}

const NewCardFormUi: React.FC<PropsInterface> = (props) => {
  const { task, updateTask, onCancel, handleSubmit } = props;

  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        background: colors.backgroundMedium,
        borderRadius: '10px',
      }}>
      <StyledWrapper>
        <TextInput
          placeholer="new task"
          name="title"
          type="text"
          value={task.title}
          onChange={updateTask}>
          Title
        </TextInput>
        <TextInput
          placeholer="my new task"
          name="description"
          type="text"
          value={task.description}
          onChange={updateTask}>
          Description
        </TextInput>
        <div
          style={{
            background: 'white',
            marginTop: '10px',
          }}>
          <DateTimePicker
            onChange={(value) => updateTask('date', value)}
            value={task.date}
          />
        </div>
      </StyledWrapper>
      <StyledWrapper direction="row" style={{ padding: '1em 0' }}>
        <Button bg={colors.success} color="white" type="submit">
          Add
        </Button>
        <Button
          style={{ marginLeft: '10px' }}
          color={colors.danger}
          onClick={onCancel}>
          Cancel
        </Button>
      </StyledWrapper>
    </Form>
  );
};

export default NewCardFormUi;
