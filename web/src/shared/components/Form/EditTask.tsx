import React, { FormEventHandler, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Task } from 'shared/store/reducers/taskReducer';
import { colors } from 'shared/utils/Styles';
import Form from '.';
import Button from '../Button';
import StyledWrapper from '../Wrappers/Styles';
import TextInput from './TextInput';

interface Props {
  editableTask: Task;
  onSubmit: Function;
}

const EditTask: React.FC<Props> = ({ editableTask, onSubmit }) => {
  const [data, setData] = useState(editableTask);

  const updateData = (field: string, value: any) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  useEffect(() => setData(editableTask), [editableTask]);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <StyledWrapper className="form-row" align="start">
        <TextInput
          name="title"
          value={data.title}
          onChange={updateData}
          type="text"
          error={null}>
          Title
        </TextInput>
      </StyledWrapper>
      <StyledWrapper align="start" className="form-row">
        <TextInput
          name="description"
          value={data.description}
          onChange={updateData}
          type="text"
          error={null}>
          Description
        </TextInput>
      </StyledWrapper>
      <StyledWrapper
        direction="row"
        justify="space-between"
        align="start"
        className="form-row">
        <TextInput
          name="date"
          value={data.date}
          onChange={updateData}
          width="150px"
          type="text"
          error={null}>
          Date
        </TextInput>
        {/* <TextInput
          name="time"
          value={da}
          onChange={() => {}}
          width="150px"
          type="text"
          error={null}>
          Hour
        </TextInput> */}
      </StyledWrapper>
      <StyledWrapper
        style={{ marginTop: '20px', color: colors.success }}
        align="flex-end">
        Status: {data.status}
      </StyledWrapper>
      <StyledWrapper
        style={{ marginTop: '20px' }}
        align="flex-end"
        className="form-row">
        <Button
          bg={colors.backgroundDark}
          color="white"
          radius="20px"
          type="submit">
          Save
        </Button>
      </StyledWrapper>
    </Form>
  );
};

const mapStateToProps = (state: any) => {
  return { editableTask: state.task.editableTask };
};

export default connect(mapStateToProps)(EditTask);
