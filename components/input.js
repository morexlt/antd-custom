import React from 'react';
import PropTypes from 'prop-types';
import { Col, InputNumber, Form, Input, Select, DatePicker } from 'antd';

/**
 * Custom Input
 * Antd Input excentsion
 * */
const InputWrapper = ({
  name,
  form,
  label,
  required,
  initialValue,
  message,
  validator,
  formatter,
  parser,
  min,
  max,
  style,
  type,
  format,
  span,
  options,
}) => {
  let itemsRules = {};
  itemsRules.required = required;
  if (message) {
    itemsRules.message = message;
  }
  if (validator) {
    itemsRules.validator = validator;
  }

  const rules = [itemsRules];

  let propsPop = {};
  if (formatter) {
    propsPop.formatter = formatter;
  }
  if (min) {
    propsPop.min = min;
  }
  if (max) {
    propsPop.max = max;
  }
  if (parser) {
    propsPop.parser = parser;
  }
  let render;
  switch (type) {
    case 'number':
      render = <InputNumber {...propsPop} style={style} />;
      break;
    case 'date':
      render = <DatePicker {...propsPop} format={format} style={style} />;
      break;
    case 'area':
      render = <Input.TextArea {...propsPop} style={style} />;
      break;
    case 'select':
      render = (
        <Select {...propsPop} style={style}>
          {options.map(opcion => (
            <Select.Option key={opcion}>{opcion}</Select.Option>
          ))}
        </Select>
      );
      break;
    case 'input':
      render = <Input {...propsPop} style={style} />;
      break;
  }
  return (
    <Col span={span}>
      <Form.Item label={label}>
        {form.getFieldDecorator(name, {
          initialValue: initialValue,
          rules,
        })(render)}
      </Form.Item>
    </Col>
  );
};

InputWrapper.propTypes = {
  span: PropTypes.number,
  type: PropTypes.string,
  name: PropTypes.string,
  form: PropTypes.object,
  label: PropTypes.string,
  required: PropTypes.bool,
  validator: PropTypes.func,
  //initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  message: PropTypes.string,

  formatter: PropTypes.func,
  parser: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  style: PropTypes.object,

  //DatePicker
  format: PropTypes.string,

  //Select
  options: PropTypes.array,
};

InputWrapper.defaultProps = {
  name: 'TEST',
  label: 'Change Properties',
  format: 'DD/MM/YYYY',
  span: 8,
  options: [],
};

export default InputWrapper;
