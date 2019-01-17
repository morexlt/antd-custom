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
  const number = <InputNumber {...propsPop} style={style} />;
  const date = <DatePicker {...propsPop} format={format} style={style} />;
  const area = <Input.TextArea {...propsPop} style={style} />;
  const select = <Select {...propsPop} style={style} />;
  const input = <Input {...propsPop} style={style} />;
  let render;
  switch (type) {
    case 'number':
      render = number;
      break;
    case 'date':
      render = date;
      break;
    case 'area':
      render = area;
      break;
    case 'select':
      render = select;
      break;
    case 'input':
      render = input;
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
};

InputWrapper.defaultProps = {
  name: 'TEST',
  label: 'Change Properties',
  format: 'DD/MM/YYYY',
  span: 8,
};

export default InputWrapper;
