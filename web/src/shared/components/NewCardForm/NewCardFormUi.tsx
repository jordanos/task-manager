import React, { FormEventHandler, MouseEventHandler } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Task } from 'shared/store/reducers/taskReducer';
import { colors } from 'shared/utils/Styles';
import Button from '../Button';
import Form from '../Form';
import TextArea from '../Form/TextArea';
import TextInput from '../Form/TextInput';
import StyledWrapper from '../Wrappers/Styles';

interface Props {
  task: Task;
  error: Task;
  updateTask: Function;
  onCancel: MouseEventHandler;
  handleSubmit: FormEventHandler;
  loading: boolean;
}

const NewCardFormUi: React.FC<Props> = (props) => {
  const { task, updateTask, onCancel, handleSubmit, loading, error } = props;

  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        background: colors.backgroundMedium,
        borderRadius: '10px',
      }}>
      <StyledWrapper className="form-row">
        <TextInput
          placeholer="new task"
          name="title"
          type="text"
          value={task.title}
          onChange={updateTask}
          error={error.title}>
          Title
        </TextInput>
      </StyledWrapper>
      <StyledWrapper className="form-row">
        <TextArea
          placeholer="my new task"
          name="description"
          value={task.description}
          onChange={updateTask}
          error={error.description}>
          Description
        </TextArea>
      </StyledWrapper>
      <StyledWrapper className="form-row">
        <div style={{ background: `${colors.backgroundLightest}` }}>
          <DateTimePicker
            onChange={(value) => updateTask('date', value)}
            value={task.date}
          />
        </div>
      </StyledWrapper>
      <StyledWrapper className="form-row" direction="row">
        <Button
          bg={colors.success}
          color="white"
          type="submit"
          loading={loading}>
          Add
        </Button>
        <Button
          style={{ marginLeft: '10px' }}
          color={colors.danger}
          onClick={onCancel}
          loading={false}>
          Cancel
        </Button>
      </StyledWrapper>
    </Form>
  );
};

export default NewCardFormUi;
