import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react'
import styles from './Form.scss';
import { Button } from '../Button/Button';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from "axios";

const FormComponent = () => {
  const { register, formState: { errors }, handleSubmit, reset, } = useForm({
    mode: "onBlur"
  });
  const [message, setMessage] = useState(false);

  const onSubmit = data => {
    const PHONE = data.PHONE;
    const EMAIL = data.EMAIL;

    // const formData = {
    //   'fields': {
    //     'TITLE': "Форма с Дубайского лендинга ricc-it.com",
    //     'NAME': data.NAME,
    //     'PHONE': {
    //       'n0': {
    //         'VALUE': PHONE,
    //         'VALUE_TYPE': 'WORK',
    //       }
    //     },
    //     'EMAIL': {
    //       'n0': {
    //         'VALUE': EMAIL,
    //         'VALUE_TYPE': 'WORK',
    //       }
    //     },
    //     'params': { 'REGISTER_SONET_EVENT': 'Y' }
    //   }
    // };

    const formData = {
      'name': data.NAME,
      'phone': PHONE,
      'email': EMAIL,
      'company': data.COMPANY
    };

    axios.post('/send', formData)
    .then((e) => {
      setMessage(true);
      reset();
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.container}>
        {
          message ?
            <div className={styles.message} >
              <h4 className={styles.messageHeading}>
                thanks for the&nbsp;request
              </h4>
              <p className={styles.messageText}>
                We will contact you as soon as possible
              </p>
              <button onClick={() => { setMessage(false) }} className={styles.messageBtn}>
                New request
              </button>
            </div>
            :
            <div className={styles.formInner}>
              <label className={styles.label}>
                <input
                  {...register('NAME', { required: true })}
                  type="text"
                  className={styles.input}
                  placeholder='Name'
                  name='NAME' />
                {errors.NAME?.type === 'required' && <span className='error'>Name is required</span>}
              </label>
              <label className={styles.label}>
                <input
                  {...register('COMPANY')}
                  type="text"
                  className={styles.input}
                  placeholder='Company'
                  name='COMPANY' />
              </label>
              <label className={styles.label}>
                <input
                  {...register('PHONE', {
                    required: true,
                  })}
                  type="number"
                  className={styles.input}
                  placeholder='Phone'
                  name='PHONE'
                  mask="999.999.999-99"
                />
                {errors.PHONE?.type === 'required' && <span className='error'>Phone is required</span>}
              </label>
              <label className={styles.label}>
                <input
                  {...register('EMAIL', {
                    required: "Email is required",
                    pattern: {
                      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Please enter a valid email',
                    }
                  })}
                  type="text"
                  className={styles.input}
                  placeholder='E-mail'
                  name='EMAIL' />
                {errors?.EMAIL && <span className='error'>{errors?.EMAIL?.message || 'Error!'}</span>}
              </label>
              <div className={styles.btnWrapper}>
                <Button modWhite>
                  send request
                </Button>
                <p className={styles.agreement}>
                  By clicking the Send Request button you agree to our <Link to="/privacy">Privacy Policy</Link> terms
                </p>
              </div>
            </div>
        }
      </div>
    </form>
  )
}

export const Form = hot(FormComponent);