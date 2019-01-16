import React from 'react';
import PropTypes from 'prop-types';
import { Col, InputNumber, Form } from 'antd';

/**
 * Custom Input
 * Antd Input excentsion
 * author: Martin Moreira
 * */
const Input = ({
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
  if (style) {
    propsPop.formatter = style;
  }
  if (min) {
    propsPop.formatter = min;
  }
  if (max) {
    propsPop.formatter = max;
  }
  if (parser) {
    propsPop.formatter = parser;
  }
  return (
    <Col span={8}>
      <Form.FormItem label={label}>
        {form.getFieldDecorator(name, {
          initialValue: initialValue,
          rules,
        })(<InputNumber propsPop />)}
      </Form.FormItem>
    </Col>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  form: PropTypes.object,
  label: PropTypes.string,
  required: PropTypes.bool,
  validator: PropTypes.func,
  initialValue: PropTypes.object,
  message: PropTypes.string,

  formatter: PropTypes.func,
  parser: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  style: PropTypes.object,
};

Input.defaultProps = {
  name: 'TEST',
  label: 'Default Properties',
};

export default Input;
