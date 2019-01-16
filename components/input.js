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
  const date = <DatePicker {...propsPop} style={style} />;
  const area = <Input.TextArea {...propsPop} style={style} />;
  const select = <Select {...propsPop} style={style} />;
  const input = <Input {...propsPop} style={style} />;
  return (
    <Col span={8}>
      <Form.Item label={label}>
        {form.getFieldDecorator(name, {
          initialValue: initialValue,
          rules,
        })({ render })}
      </Form.Item>
    </Col>
  );
};

InputWrapper.propTypes = {
  name: PropTypes.string,
  form: PropTypes.object,
  label: PropTypes.string,
  required: PropTypes.bool,
  validator: PropTypes.func,
  initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  message: PropTypes.string,

  formatter: PropTypes.func,
  parser: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  style: PropTypes.object,
};

InputWrapper.defaultProps = {
  name: 'TEST',
  label: 'Change Properties',
};

export default InputWrapper;
