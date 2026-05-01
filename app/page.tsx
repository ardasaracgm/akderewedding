'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, MessageCircle, MapPin, Phone, Mail, Instagram, ChevronLeft, ChevronRight } from 'lucide-react'

const PHONE = '+90 541 551 07 29'
const WHATSAPP = '905415510729'

const heroSlides = [
  {
    title: 'Göl Kenarında Kır Düğünü',
    text: 'Doğayla iç içe, göl kıyısında masalsı bir nikah ve düğün deneyimi.',
    image: '/images/akdere-gol-kenari-nikah.png',
  },
  {
    title: 'Rustik Masa Düzenleri',
    text: 'Ahşap detaylar, beyaz masa örtüleri ve doğal çiçeklerle sade bir şıklık.',
    image: '/images/akdere-rustik-masa.jpg',
  },
  {
    title: 'Doğal Çiçek Konseptleri',
    text: 'Masa, nikah alanı ve dekor köşeleri için özenle hazırlanan çiçek aranjmanları.',
    image: '/images/akdere-cicek-dekor.jpg',
  },
  {
    title: 'Kır Bahçesinde Özel Davetler',
    text: 'Düğün, kına, nişan ve kurumsal organizasyonlar için ferah açık alanlar.',
    image: '/images/akdere-kir-bahcesi.jpg',
  },
]

const services = ['Düğün Organizasyonu', 'Göl Kenarı Nikahı', 'Kına Gecesi', 'Kurumsal Etkinlik', 'Kahvaltı & Restoran', 'Piknik & Lansman']

const concepts = [
  { title: 'Rustik Kır Konsepti', image: '/images/akdere-rustik-masa.jpg' },
  { title: 'Beyaz Masa Düzeni', image: '/images/akdere-beyaz-masa.jpg' },
  { title: 'Canlı Çiçek Aranjmanları', image: '/images/akdere-cicek-dekor.jpg' },
  { title: 'Dekor & Fotoğraf Köşesi', image: '/images/akdere-dekor-kosesi.jpg' },
]

const gallery = [
  { src: '/images/akdere-gol-kenari-nikah.png', title: 'Göl Kenarı Nikah Alanı' },
  { src: '/images/akdere-rustik-masa.jpg', title: 'Rustik Masa Düzeni' },
  { src: '/images/akdere-cicek-dekor.jpg', title: 'Canlı Çiçek Detayları' },
  { src: '/images/akdere-ahsap-dekor.jpg', title: 'Ahşap Dekor Konsepti' },
  { src: '/images/akdere-beyaz-masa.jpg', title: 'Beyaz Sandalye Düzeni' },
  { src: '/images/akdere-dekor-kosesi.jpg', title: 'Fotoğraf Köşesi' },
  { src: '/images/akdere-masa-detay.jpg', title: 'Masa Süsleme Detayı' },
  { src: '/images/akdere-kir-bahcesi.jpg', title: 'Kır Bahçesi Atmosferi' },
  { src: '/images/akdere-icecek-kosesi.jpg', title: 'Davet İkram Alanı' },
]

const menuTypes = ['Pasta & Meşrubat Menü', 'Mini Kokteyl Menü', 'Kokteyl Menü', 'Ordövr Menü', 'Beyaz Et Menü', 'Karışık Izgara Menü', 'Kırmızı Et Menü']
const planningSteps = ['Ön görüşme ve tarih kontrolü', 'Alan seçimi ve konsept planlama', 'Masa düzeni, çiçek ve süsleme tasarımı', 'Menü ve ikram detaylarının belirlenmesi', 'Düğün akışı ve final koordinasyonu']

function whatsappLink(message = 'Merhaba, Akdere Wedding için bilgi almak istiyorum. Düğün/organizasyon tarihi ve kişi sayısı hakkında görüşebilir miyiz?') {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`
}

export default function Home() {
  const [slide, setSlide] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<(typeof gallery)[number] | null>(null)

  useEffect(() => {
    const timer = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5200)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setSlide((s) => (s + 1) % heroSlides.length)
  const prevSlide = () => setSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length)

  return (
    <main className="min-h-screen bg-[#fbf7ef] text-[#173f34]">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/20 bg-[#12382f]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="flex items-center gap-3 text-white">
            <img src="/akdre-logo.svg" alt="Akdere Wedding" className="h-12 w-auto" />
            <div className="hidden sm:block">
              <div className="text-lg font-semibold tracking-wide">AKDERE WEDDING</div>
              <div className="text-xs uppercase tracking-[0.25em] text-white/70">Wedding & Restaurant</div>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/85 md:flex">
            <a href="#about">Hakkımızda</a><a href="#services">Hizmetlerimiz</a><a href="#concepts">Konseptler</a><a href="#menu">Menü</a><a href="#gallery">Galeri</a><a href="#contact">İletişim</a>
          </nav>
          <a href={whatsappLink()} className="hidden rounded-full bg-[#d8ad35] px-5 py-2.5 text-sm font-semibold text-[#12382f] shadow-lg transition hover:scale-105 md:inline-flex">WhatsApp’tan Bilgi Al</a>
          <button aria-label="Menü" className="text-white md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</button>
        </div>
        {mobileOpen && (
          <div className="border-t border-white/10 bg-[#12382f] px-5 py-4 text-white md:hidden">
            {[['Hakkımızda', '#about'], ['Hizmetlerimiz', '#services'], ['Konseptler', '#concepts'], ['Menü', '#menu'], ['Galeri', '#gallery'], ['İletişim', '#contact']].map(([label, href]) => <a key={href} href={href} className="block py-2" onClick={() => setMobileOpen(false)}>{label}</a>)}
          </div>
        )}
      </header>

      <section id="home" className="relative h-screen overflow-hidden">
        {heroSlides.map((item, index) => (
          <motion.div key={item.title} initial={false} animate={{ opacity: index === slide ? 1 : 0, scale: index === slide ? 1 : 1.04 }} transition={{ duration: 0.9 }} className="absolute inset-0">
            <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c2c25]/90 via-[#0c2c25]/55 to-black/20" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 pt-20">
          <motion.div key={slide} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl text-white">
            <div className="mb-5 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm backdrop-blur">Göl Kenarında Kır Düğünü Mekanı</div>
            <h1 className="mb-6 text-5xl font-semibold leading-tight md:text-7xl">{heroSlides[slide].title}</h1>
            <p className="mb-8 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">{heroSlides[slide].text}</p>
            <div className="flex flex-wrap gap-4">
              <a href={whatsappLink()} className="inline-flex items-center gap-2 rounded-full bg-[#d8ad35] px-7 py-4 font-semibold text-[#12382f] shadow-xl"><MessageCircle size={20} /> WhatsApp’tan Bilgi Al</a>
              <a href="#gallery" className="rounded-full border border-white/50 px-7 py-4 font-semibold text-white backdrop-blur">Galeriyi İncele</a>
            </div>
          </motion.div>
        </div>
        <button aria-label="Önceki" onClick={prevSlide} className="absolute bottom-10 right-24 z-20 rounded-full border border-white/40 bg-white/10 p-3 text-white backdrop-blur"><ChevronLeft /></button>
        <button aria-label="Sonraki" onClick={nextSlide} className="absolute bottom-10 right-10 z-20 rounded-full border border-white/40 bg-white/10 p-3 text-white backdrop-blur"><ChevronRight /></button>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#b88922]">Hakkımızda</p>
          <h2 className="mb-6 text-4xl font-semibold md:text-5xl">Doğanın içinde, özel günlere zarif bir ev sahipliği.</h2>
          <p className="mb-6 text-lg leading-8 text-[#395c53]">Akdere Wedding; göl kenarı atmosferi, kır bahçesi, kapalı alan alternatifleri ve deneyimli organizasyon ekibiyle düğün, nikah, kına, kahvaltı ve kurumsal davetler için sade ve şık çözümler sunar.</p>
          <div className="grid gap-4 sm:grid-cols-3"><div className="rounded-2xl bg-white p-5 shadow-sm"><b className="text-2xl">20</b><br />Dönüm alan</div><div className="rounded-2xl bg-white p-5 shadow-sm"><b className="text-2xl">700+</b><br />Kır bahçesi</div><div className="rounded-2xl bg-white p-5 shadow-sm"><b className="text-2xl">25</b><br />Yıl deneyim</div></div>
        </div>
        <div className="overflow-hidden rounded-[2rem] shadow-2xl"><img src="/images/akdere-rustik-masa.jpg" alt="Akdere Wedding" className="h-[520px] w-full object-cover" /></div>
      </section>

      <section id="services" className="bg-[#12382f] px-5 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#d8ad35]">Hizmetlerimiz</p>
          <h2 className="mb-12 max-w-3xl text-4xl font-semibold md:text-5xl">Düğünden kurumsal davetlere kadar her an için profesyonel organizasyon.</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => <div key={service} className="rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur"><div className="mb-5 h-10 w-10 rounded-full bg-[#d8ad35]" /><h3 className="mb-3 text-2xl font-semibold">{service}</h3><p className="leading-7 text-white/70">Planlama, alan kullanımı, süsleme ve servis detaylarıyla size özel bir deneyim hazırlanır.</p></div>)}
          </div>
        </div>
      </section>

      <section id="concepts" className="mx-auto max-w-7xl px-5 py-24">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#b88922]">Konseptler</p><h2 className="text-4xl font-semibold md:text-5xl">Size özel masa, nikah ve süsleme konseptleri.</h2></div><a href={whatsappLink('Merhaba, Akdere Wedding konseptleri hakkında bilgi almak istiyorum.')} className="inline-flex w-fit items-center gap-2 rounded-full bg-[#12382f] px-6 py-3 font-semibold text-white"><MessageCircle size={18} /> Konsept Sor</a></div>
        <div className="grid gap-6 md:grid-cols-4">
          {concepts.map((item) => <div key={item.title} className="overflow-hidden rounded-[2rem] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><img src={item.image} alt={item.title} className="h-56 w-full object-cover" /><div className="p-6"><h3 className="mb-3 text-xl font-semibold">{item.title}</h3><p className="text-[#5f756f]">Çiçek, masa düzeni, ışık ve nikah alanı detaylarıyla bütünlüklü tasarım.</p></div></div>)}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#12382f] px-5 py-24 text-white"><div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#d8ad35]/20 blur-3xl" /><div className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-3 md:items-center"><div className="md:col-span-2"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#d8ad35]">Öne Çıkan Alanlar</p><h2 className="mb-6 text-4xl font-semibold md:text-5xl">Göl kıyısı nikah alanı, kır bahçesi ve kapalı davet alanı bir arada.</h2><p className="max-w-3xl text-lg leading-8 text-white/75">Davetinizin mevsimine, kişi sayısına ve konseptine göre açık ya da kapalı alanlar planlanır. Organizasyon süreci baştan sona ekip tarafından takip edilir.</p></div><div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur"><div className="mb-5 text-5xl font-semibold text-[#d8ad35]">700+</div><p className="text-xl font-semibold">Kişilik kır bahçesi kapasitesi</p><p className="mt-3 text-white/70">Nikah, düğün ve davet organizasyonları için geniş açık alan.</p></div></div></section>

      <section id="menu" className="bg-white px-5 py-24"><div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center"><div className="overflow-hidden rounded-[2rem]"><img src="/images/akdere-masa-detay.jpg" alt="Menü" className="h-[500px] w-full object-cover" /></div><div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#b88922]">Menü</p><h2 className="mb-6 text-4xl font-semibold md:text-5xl">Davetiniz için lezzetli ve esnek menü seçenekleri.</h2><p className="mb-8 text-lg leading-8 text-[#395c53]">Kokteyl, ordövr, beyaz et, kırmızı et ve özel ikram seçenekleri kişi sayısı ve organizasyon tipine göre planlanır. Fiyat bilgisi web sitesinde gösterilmez; detaylar için WhatsApp hattından bilgi alınır.</p><div className="mb-8 grid gap-3 sm:grid-cols-2">{menuTypes.map((item) => <div key={item} className="rounded-2xl border border-[#e8dcc7] bg-[#fbf7ef] px-4 py-3 text-sm font-semibold text-[#173f34]">{item}</div>)}</div><a href={whatsappLink('Merhaba, Akdere Wedding menü detayları hakkında bilgi almak istiyorum.')} className="inline-flex items-center gap-2 rounded-full bg-[#d8ad35] px-7 py-4 font-semibold text-[#12382f]"><MessageCircle size={20} /> Menü Detayı Al</a></div></div></section>

      <section className="bg-[#f4eadb] px-5 py-24"><div className="mx-auto max-w-7xl"><div className="mb-12 max-w-3xl"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#b88922]">Düğün Akışı</p><h2 className="text-4xl font-semibold md:text-5xl">Her detay baştan sona planlanır.</h2></div><div className="grid gap-5 md:grid-cols-5">{planningSteps.map((step, index) => <div key={step} className="rounded-[1.5rem] bg-white p-6 shadow-sm"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#12382f] text-lg font-semibold text-white">{index + 1}</div><p className="font-semibold leading-7">{step}</p></div>)}</div></div></section>

      <section id="gallery" className="mx-auto max-w-7xl px-5 py-24"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#b88922]">Galeri</p><h2 className="mb-12 text-4xl font-semibold md:text-5xl">Akdere Wedding’den kareler.</h2><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{gallery.map((item) => <button key={item.src} onClick={() => setSelectedImage(item)} className="group relative overflow-hidden rounded-[1.5rem] text-left shadow-sm"><img src={item.src} alt={item.title} className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white"><p className="font-semibold">{item.title}</p></div></button>)}</div></section>

      <section id="contact" className="bg-[#12382f] px-5 py-20 text-white"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center"><div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#d8ad35]">İletişim</p><h2 className="mb-6 text-4xl font-semibold md:text-5xl">Tarihiniz için bilgi alın.</h2><p className="mb-8 text-white/70">Düğün, nikah, kına veya kurumsal etkinlik planınız için WhatsApp hattından hızlıca ulaşabilirsiniz.</p><div className="space-y-4 text-white/85"><p className="flex items-center gap-3"><Phone size={20} /> {PHONE}</p><p className="flex items-center gap-3"><Mail size={20} /> info@akdereciftligi.com.tr</p><p className="flex items-center gap-3"><MapPin size={20} /> Çiçekli Köy, 38, Bornova, İzmir 35040</p><p className="flex items-center gap-3"><Instagram size={20} /> instagram.com/kirdugunum</p></div></div><div className="rounded-[2rem] bg-white p-8 text-[#12382f] shadow-2xl"><h3 className="mb-5 text-2xl font-semibold">Hızlı Bilgi</h3><p className="mb-6 text-[#5f756f]">Form yerine direkt WhatsApp’a yönlendiriyoruz. Tarih, kişi sayısı ve organizasyon türünü mesajda belirtebilirsiniz.</p><a href={whatsappLink()} className="block rounded-full bg-[#12382f] px-6 py-4 text-center font-semibold text-white">WhatsApp’tan Yaz</a></div></div></section>

      <section className="bg-[#fbf7ef] px-5 py-20"><div className="mx-auto max-w-7xl"><div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#b88922]">Konum</p><h2 className="text-4xl font-semibold md:text-5xl">Bornova Çiçekli Köy’de doğayla iç içe.</h2></div><a href="https://www.google.com/maps/search/?api=1&query=%C3%87i%C3%A7ekli%20K%C3%B6y%2038%20Bornova%20%C4%B0zmir%2035040" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full bg-[#12382f] px-6 py-3 font-semibold text-white"><MapPin size={18} /> Haritada Aç</a></div><div className="overflow-hidden rounded-[2rem] border border-[#e8dcc7] shadow-sm"><iframe title="Akdere Wedding Konum" src="https://www.google.com/maps?q=%C3%87i%C3%A7ekli%20K%C3%B6y%2038%20Bornova%20%C4%B0zmir%2035040&output=embed" className="h-[420px] w-full" loading="lazy" /></div></div></section>

      <footer className="bg-[#0c2c25] px-5 py-10 text-white"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center"><div><div className="text-xl font-semibold">AKDERE WEDDING</div><div className="mt-1 text-sm text-white/60">Göl Kenarında Kır Düğünü Mekanı</div></div><div className="flex flex-wrap gap-4 text-sm text-white/70"><a href="https://www.instagram.com/kirdugunum/" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a><a href={whatsappLink()} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a><a href="#contact" className="hover:text-white">İletişim</a></div></div></footer>

      {selectedImage && <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-5" onClick={() => setSelectedImage(null)}><button aria-label="Kapat" className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white backdrop-blur" onClick={() => setSelectedImage(null)}><X /></button><div className="max-h-[90vh] max-w-5xl overflow-hidden rounded-[2rem] bg-white" onClick={(e) => e.stopPropagation()}><img src={selectedImage.src} alt={selectedImage.title} className="max-h-[78vh] w-full object-contain" /><div className="px-6 py-4 text-[#12382f]"><p className="text-lg font-semibold">{selectedImage.title}</p></div></div></div>}
      <a href={whatsappLink()} className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-4 font-semibold text-white shadow-2xl transition hover:scale-105"><MessageCircle size={22} /> WhatsApp</a>
    </main>
  )
}
