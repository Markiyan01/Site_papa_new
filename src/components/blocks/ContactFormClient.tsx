'use client'

import React, { useState } from 'react'

const INPUT =
  'w-full px-3.5 py-3 border border-line bg-paper font-sans text-[15px] text-ink focus:outline-none focus:border-green'

const PHONE_RE = /^(\+?380\d{9}|0\d{9})$/

const isValidPhone = (value: string) => PHONE_RE.test(value.replace(/[\s\-()]/g, ''))

export const ContactFormClient = ({ block }: { block: any }) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [phone, setPhone] = useState('')
  const [phoneError, setPhoneError] = useState('')

  const validatePhoneField = () => {
    if (!phone.trim()) {
      setPhoneError('Вкажіть телефон')
      return false
    }
    if (!isValidPhone(phone)) {
      setPhoneError('Некоректний номер. Приклад: +380671234567')
      return false
    }
    setPhoneError('')
    return true
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validatePhoneField()) {
      return
    }

    setStatus('loading')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
        setPhone('')
      } else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div id="lead" className="scroll-mt-[130px] frame bg-white p-12 self-start">
      <div className="kicker">Заявка на оренду</div>
      <h2 className="text-[38px] mt-4 mb-2.5">{block.title || 'Підберемо офіс'}</h2>
      <p className="text-[15px] leading-[1.8] text-muted mb-[30px]">
        {block.description || 'Залиште контакти — надішлемо перелік вільних приміщень і запропонуємо час огляду.'}
      </p>

      {status === 'success' ? (
        <div className="border border-green bg-[#f1f4ef] p-7 text-center">
          <h3 className="text-[28px] text-green mb-2">Дякуємо!</h3>
          <p className="text-[15px] text-ink-soft">Заявку прийнято — зателефонуємо протягом робочого дня.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
          <div className="hidden" aria-hidden="true">
            <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="kicker block mb-2">Ім&apos;я</label>
              <input id="name" name="name" type="text" required placeholder="Ваше ім&apos;я" className={INPUT} />
            </div>
            <div>
              <label htmlFor="phone" className="kicker block mb-2">Телефон</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+380671234567"
                className={INPUT}
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value)
                  if (phoneError) setPhoneError('')
                }}
                onBlur={validatePhoneField}
                aria-invalid={Boolean(phoneError)}
                aria-describedby={phoneError ? 'phone-error' : undefined}
              />
              {phoneError && (
                <span id="phone-error" className="block text-[#8c3a1f] text-xs mt-1.5">
                  {phoneError}
                </span>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="kicker block mb-2">Коментар</label>
            <textarea id="message" name="message" rows={4} placeholder="Потрібна площа, зручний час огляду" className={`${INPUT} resize-y`} />
          </div>

          {status === 'error' && (
            <div className="text-[#8c3a1f] text-sm">Виникла помилка. Спробуйте пізніше або зателефонуйте нам.</div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-lift py-[17px] bg-green text-paper text-xs uppercase tracking-[0.2em] hover:bg-green-dark disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none"
          >
            {status === 'loading' ? 'Відправка…' : 'Надіслати заявку'}
          </button>
          <span className="text-xs text-kicker text-center">
            Натискаючи кнопку, ви погоджуєтесь на обробку контактних даних.
          </span>
        </form>
      )}
    </div>
  )
}
