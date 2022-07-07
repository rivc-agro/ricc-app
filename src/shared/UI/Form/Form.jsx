import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react'
import styles from './Form.scss';
import { Button } from '../Button/Button';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const FormComponent = () => {
  const { register, formState: { errors }, handleSubmit, reset, } = useForm({
    mode: "onBlur"
  });
  const [message, setMessage] = useState(false);

  const onSubmit = data => {
    setMessage(true);

    reset();
  }

  return (
    <form action="/" onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
                  {...register('name', { required: true })}
                  type="text"
                  className={styles.input}
                  placeholder='Name'
                  name='name' />
                {errors.name?.type === 'required' && <span className='error'>Name is required</span>}
              </label>
              <label className={styles.label}>
                <input
                  {...register('company-name')}
                  type="text"
                  className={styles.input}
                  placeholder='Company'
                  name='company-name' />
              </label>
              <label className={styles.label}>
                <input
                  {...register('phone', {
                    required: true,
                  })}
                  type="number"
                  className={styles.input}
                  placeholder='Phone'
                  name='phone'
                  mask="999.999.999-99"
                />
                {errors.phone?.type === 'required' && <span className='error'>Phone is required</span>}
              </label>
              <label className={styles.label}>
                <input
                  {...register('email', {
                    required: "Email is required",
                    pattern: {
                      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Please enter a valid email',
                    }
                  })}
                  type="text"
                  className={styles.input}
                  placeholder='E-mail'
                  name='email' />
                {errors?.email && <span className='error'>{errors?.email?.message || 'Error!'}</span>}
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