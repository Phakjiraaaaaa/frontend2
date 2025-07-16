'use client';

import { useState } from 'react';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [prefix, setPrefix] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !username.trim() ||
      !password.trim() ||
      !prefix ||
      !firstName.trim() ||
      !lastName.trim() ||
      !gender ||
      !birthDate ||
      !acceptedTerms
    ) {
      alert('กรุณากรอกข้อมูลให้ครบถ้วนและยอมรับเงื่อนไข');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      alert(
        `สมัครสมาชิกสำเร็จ!\n` +
          `ชื่อผู้ใช้: ${username}\n` +
          `คำนำหน้า: ${prefix}\n` +
          `ชื่อ: ${firstName}\n` +
          `นามสกุล: ${lastName}\n` +
          `ที่อยู่: ${address}\n` +
          `เพศ: ${gender}\n` +
          `วันเกิด: ${birthDate}\n` +
          `ยอมรับเงื่อนไข: ใช่`
      );

      setUsername('');
      setPassword('');
      setPrefix('');
      setFirstName('');
      setLastName('');
      setAddress('');
      setGender('');
      setBirthDate('');
      setAcceptedTerms(false);
      setIsSubmitting(false);
    }, 800);
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    marginBottom: 8,
    border: '1.5px solid #ccc',
    borderRadius: 8,
    fontSize: 16,
    transition: 'border-color 0.3s, box-shadow 0.3s',
  };

  const inputFocusStyle = {
    borderColor: '#0d6efd',
    outline: 'none',
    boxShadow: '0 0 8px rgba(13, 110, 253, 0.5)',
  };

  const labelStyle = {
    fontWeight: '600',
    display: 'block',
    marginBottom: 6,
    transition: 'color 0.3s, transform 0.3s',
  };

  const labelFocusedStyle = {
    color: '#0d6efd',
    transform: 'translateY(-2px)',
  };

  const buttonStyle = {
    width: '100%',
    padding: 14,
    fontSize: 18,
    fontWeight: '600',
    backgroundColor: '#0d6efd',
    color: 'white',
    border: 'none',
    borderRadius: 12,
    cursor: isSubmitting ? 'wait' : 'pointer',
    boxShadow: '0 6px 12px rgba(13, 110, 253, 0.4)',
    transition: 'background-color 0.3s, box-shadow 0.3s, transform 0.1s',
    ...(isSubmitting && { animation: 'shake 0.3s ease-in-out' }),
  };

  return (
    <>
      <style>
        {`
          @keyframes shake {
            0% { transform: translateX(0); }
            20% { transform: translateX(-5px); }
            40% { transform: translateX(5px); }
            60% { transform: translateX(-5px); }
            80% { transform: translateX(5px); }
            100% { transform: translateX(0); }
          }
        `}
      </style>

      <main
        style={{
          maxWidth: 500,
          margin: '3rem auto',
          padding: '2.5rem 3rem',
          borderRadius: 16,
          backgroundImage: `linear-gradient(
            rgba(255, 255, 255, 0.85), 
            rgba(255, 255, 255, 0.85)
          ), url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: '0 12px 30px rgba(13, 110, 253, 0.2)',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: '#333',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            marginBottom: 24,
            fontWeight: '700',
            color: '#0d6efd',
            letterSpacing: '1.2px',
          }}
        >
          สมัครสมาชิก
        </h1>
        <form onSubmit={handleSubmit} noValidate>
          <label
            htmlFor="username"
            style={{
              ...labelStyle,
              ...(focusedInput === 'username' ? labelFocusedStyle : {}),
            }}
          >
            👤 ชื่อผู้ใช้
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onFocus={() => setFocusedInput('username')}
            onBlur={() => setFocusedInput(null)}
            style={{
              ...inputStyle,
              ...(focusedInput === 'username' ? inputFocusStyle : {}),
            }}
            required
            placeholder="กรอกชื่อผู้ใช้"
            disabled={isSubmitting}
          />

          <label
            htmlFor="password"
            style={{
              ...labelStyle,
              ...(focusedInput === 'password' ? labelFocusedStyle : {}),
            }}
          >
            ❗ รหัสผ่าน
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setFocusedInput('password')}
            onBlur={() => setFocusedInput(null)}
            style={{
              ...inputStyle,
              ...(focusedInput === 'password' ? inputFocusStyle : {}),
            }}
            required
            placeholder="กรอกรหัสผ่าน"
            disabled={isSubmitting}
          />

          <label
            htmlFor="prefix"
            style={{
              ...labelStyle,
              ...(focusedInput === 'prefix' ? labelFocusedStyle : {}),
            }}
          >
             🎃 คำนำหน้าชื่อ
          </label>
          <select
            id="prefix"
            value={prefix}
            onChange={(e) => setPrefix(e.target.value)}
            onFocus={() => setFocusedInput('prefix')}
            onBlur={() => setFocusedInput(null)}
            style={{
              ...inputStyle,
              appearance: 'none',
              background:
                'url("data:image/svg+xml;utf8,<svg fill=\'%230d6efd\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/></svg>") no-repeat right 12px center',
              backgroundColor: '#fff',
              backgroundSize: '16px',
              cursor: 'pointer',
              ...(focusedInput === 'prefix' ? inputFocusStyle : {}),
            }}
            required
            disabled={isSubmitting}
          >
            <option value="">-- กรุณาเลือก --</option>
            <option value="นาย">นาย</option>
            <option value="นาง">นาง</option>
            <option value="นางสาว">นางสาว</option>
          </select>

          <label
            htmlFor="firstName"
            style={{
              ...labelStyle,
              ...(focusedInput === 'firstName' ? labelFocusedStyle : {}),
            }}
          >
            👤ชื่อ
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            onFocus={() => setFocusedInput('firstName')}
            onBlur={() => setFocusedInput(null)}
            style={{
              ...inputStyle,
              ...(focusedInput === 'firstName' ? inputFocusStyle : {}),
            }}
            required
            placeholder="กรอกชื่อ"
            disabled={isSubmitting}
          />

          <label
            htmlFor="lastName"
            style={{
              ...labelStyle,
              ...(focusedInput === 'lastName' ? labelFocusedStyle : {}),
            }}
          >
            🌲นามสกุล
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            onFocus={() => setFocusedInput('lastName')}
            onBlur={() => setFocusedInput(null)}
            style={{
              ...inputStyle,
              ...(focusedInput === 'lastName' ? inputFocusStyle : {}),
            }}
            required
            placeholder="กรอกนามสกุล"
            disabled={isSubmitting}
          />

          <label htmlFor="address" style={labelStyle}>
            🏡ที่อยู่
          </label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{
              ...inputStyle,
              resize: 'vertical',
              minHeight: 70,
            }}
            rows={3}
            placeholder="กรอกที่อยู่ (ถ้ามี)"
            disabled={isSubmitting}
          />

          <fieldset
            style={{
              marginBottom: 16,
              border: 'none',
              padding: 0,
            }}
            disabled={isSubmitting}
          >
            <legend
              style={{
                fontWeight: '600',
                marginBottom: 8,
                color: '#0d6efd',
              }}
            >
              👤เพศ
            </legend>
            <label
              style={{
                marginRight: 24,
                cursor: 'pointer',
                fontWeight: '500',
              }}
            >
              <input
                type="radio"
                name="gender"
                value="ชาย"
                checked={gender === 'ชาย'}
                onChange={(e) => setGender(e.target.value)}
                required
                style={{ marginRight: 6 }}
                disabled={isSubmitting}
              />
              🙇‍♂️ชาย
            </label>
            <label
              style={{
                cursor: 'pointer',
                fontWeight: '500',
              }}
            >
              <input
                type="radio"
                name="gender"
                value="หญิง"
                checked={gender === 'หญิง'}
                onChange={(e) => setGender(e.target.value)}
                required
                style={{ marginRight: 6 }}
                disabled={isSubmitting}
              />
              🙇‍♀️หญิง
            </label>
          </fieldset>

          <label
            htmlFor="birthDate"
            style={{
              ...labelStyle,
              ...(focusedInput === 'birthDate' ? labelFocusedStyle : {}),
            }}
          >
            🎂วันเกิด
          </label>
          <input
            type="date"
            id="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            onFocus={() => setFocusedInput('birthDate')}
            onBlur={() => setFocusedInput(null)}
            style={{
              ...inputStyle,
              ...(focusedInput === 'birthDate' ? inputFocusStyle : {}),
            }}
            required
            disabled={isSubmitting}
          />

          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 24,
              cursor: 'pointer',
              fontWeight: '500',
            }}
          >
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              style={{ marginRight: 10, width: 18, height: 18, cursor: 'pointer' }}
              required
              disabled={isSubmitting}
            />
            ยอมรับเงื่อนไข
          </label>

          <button
            type="submit"
            style={buttonStyle}
            disabled={isSubmitting}
            onMouseEnter={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.backgroundColor = '#084cdf';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(8, 76, 223, 0.6)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.backgroundColor = '#0d6efd';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(13, 110, 253, 0.4)';
              }
            }}
          >
            {isSubmitting ? 'กำลังสมัคร...' : 'สมัครสมาชิก'}
          </button>
        </form>
      </main>
    </>
  );
}
