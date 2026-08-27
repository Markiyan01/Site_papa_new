'use client'

import React, { useState } from 'react'

export const ContactFormClient = ({ block }: { block: any }) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      
      if (res.ok) {
        setStatus('success')
        e.currentTarget.reset()
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100 max-w-2xl mx-auto w-full">
      <h3 className="text-2xl font-serif text-graphite mb-2">{block.title}</h3>
      {block.description && (
        <p className="text-gray-500 mb-8 font-light">{block.description}</p>
      )}
      
      {status === 'success' ? (
        <div className="bg-rosemary/10 text-rosemary p-6 rounded text-center">
          <h4 className="text-xl font-medium mb-2">Дякуємо!</h4>
          <p>Вашу заявку успішно відправлено. Ми зв'яжемося з вами найближчим часом.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot field for bot protection */}
          <div className="hidden" aria-hidden="true">
            <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Ім'я <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="w-full px-4 py-3 bg-paper border border-gray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-rosemary transition-shadow"
                placeholder="Ваше ім'я"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Телефон <span className="text-red-500">*</span>
              </label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                required 
                className="w-full px-4 py-3 bg-paper border border-gray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-rosemary transition-shadow"
                placeholder="+380"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Повідомлення
            </label>
            <textarea 
              id="message" 
              name="message" 
              rows={4}
              className="w-full px-4 py-3 bg-paper border border-gray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-rosemary transition-shadow resize-y"
              placeholder="Коментар або запитання"
            ></textarea>
          </div>
          
          {status === 'error' && (
            <div className="text-red-500 text-sm">
              Виникла помилка при відправці. Будь ласка, спробуйте пізніше або зателефонуйте нам.
            </div>
          )}

          <button 
            type="submit" 
            disabled={status === 'loading'}
            className="w-full bg-graphite text-white font-medium py-4 px-8 rounded-sm hover:bg-rosemary transition-colors disabled:opacity-70 flex justify-center items-center"
          >
            {status === 'loading' ? 'Відправка...' : 'Відправити'}
          </button>
        </form>
      )}
    </div>
  )
}

