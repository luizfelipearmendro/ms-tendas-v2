import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, RefreshCcw } from 'lucide-react';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    assunto: 'Orçamento — Tenda 3x3',
    mensagem: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Formatação da mensagem conforme solicitado no screenshot
    const msg = `Olá, Júlio! Me chamo *${formData.nome}*.\n\n*Assunto:* ${formData.assunto}\n\n*Mensagem:* ${formData.mensagem}\n\n*Telefone:* ${formData.whatsapp}${formData.email ? `\n*E-mail:* ${formData.email}` : ""}`;
      
    const url = `https://wa.me/5565999047060?text=${encodeURIComponent(msg)}`;

    setWhatsappUrl(url);
    setIsSubmitted(true);

    // Abre o WhatsApp automaticamente
    window.open(url, '_blank');
  };

  const formatPhone = (value) => {
    value = value.replace(/\D/g, "");

    value = value.slice(0, 11);

    if (value.length <= 10) {
      return value
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    } else {
      return value
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name === "whatsapp") {
      newValue = formatPhone(value);
    }

    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));
  };

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Solicitar Orçamento</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Preencha o formulário abaixo e nossa equipe entrará em contato em menos de 15 minutos com a melhor proposta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
          >
            <div className="bg-blue-600 p-8 text-white">
              <h2 className="text-2xl font-bold mb-2">Envie sua mensagem</h2>
              <p className="text-blue-100 opacity-90">Preencha o formulário e enviaremos direto para o WhatsApp!</p>
            </div>

            <div className="p-10">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider flex justify-between">
                          Seu nome <span className="text-red-500">*</span>
                        </label>
                        <input
                          required
                          name="nome"
                          value={formData.nome}
                          onChange={handleChange}
                          type="text"
                          className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                          placeholder="Ex: Júlio Armendro"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 uppercase tracking-wider flex justify-between">
                          Telefone / WhatsApp <span className="text-red-500">*</span>
                        </label>
                        <input
                          required
                          name="whatsapp"
                          value={formData.whatsapp}
                          onChange={handleChange}
                          type="tel"
                          className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                          placeholder="(65) 99904-7060"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider flex justify-between">
                        Assunto / Tipo de Evento <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="assunto"
                        value={formData.assunto}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      >
                        <option>Orçamento — Tenda 3x3</option>
                        <option>Orçamento — Tenda 4x4</option>
                        <option>Orçamento — Tenda 5x5</option>
                        <option>Festa Particular</option>
                        <option>Evento Corporativo</option>
                        <option>Outros</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider flex justify-between">
                        Mensagem <span className="text-red-500">*</span>
                        <span className="text-xs text-slate-400 lowercase font-normal">{formData.mensagem.length} caracteres</span>
                      </label>
                      <textarea
                        required
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        placeholder="Descreva seu evento ou as medidas que precisa"
                      ></textarea>
                    </div>
                    <div className="pt-4">
                      <button type="submit" className="w-full bg-green-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-green-700 transition-all shadow-xl shadow-green-100 flex items-center justify-center gap-3">
                        <MessageCircle size={24} />
                        Enviar pelo WhatsApp
                      </button>
                      <p className="text-center text-slate-400 text-sm mt-4">
                        Ao enviar, o WhatsApp será aberto com sua mensagem pronta para envio.
                      </p>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-4">Mensagem enviada!</h3>
                    <p className="text-slate-600 text-lg mb-10 max-w-xs mx-auto">
                      O WhatsApp foi aberto com sua mensagem pronta. Caso não tenha aberto, clique no botão abaixo.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        className="bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2"
                      >
                        <MessageCircle size={20} />
                        Abrir WhatsApp
                      </a>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-white text-slate-600 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                      >
                        <RefreshCcw size={20} />
                        Enviar outra mensagem
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                    <Phone size={28} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-bold uppercase">Telefone / WhatsApp</p>
                    <p className="text-slate-900 font-extrabold text-xl">(65) 99904-7060</p>
                    <p className="text-slate-900 font-extrabold text-xl">(65) 99208-7365</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                    <Mail size={28} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-bold uppercase">E-mail</p>
                    <p className="text-slate-900 font-extrabold text-xl">mstendas2016@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-bold uppercase">Localização</p>
                    <p className="text-slate-900 font-extrabold text-xl">Cuiabá - MT</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-900 p-10 rounded-3xl text-white relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4">Atendimento Imediato</h4>
                <p className="text-blue-100 mb-8 leading-relaxed opacity-90">
                  Nossa equipe está online agora para tirar suas dúvidas e enviar seu orçamento em tempo recorde.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <div className="w-12 h-12 rounded-full border-4 border-blue-900 bg-slate-200 overflow-hidden">
                      <img src="/images/marcos.jpeg" alt="Atendente" />
                    </div>
                    <div className="w-12 h-12 rounded-full border-4 border-blue-900 bg-slate-200 overflow-hidden">
                      <img src="/images/julio.jpeg" alt="Atendente" />
                    </div>
                  </div>
                  <p className="text-sm font-medium text-blue-100">Equipe de prontidão</p>
                </div>
              </div>
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-800 rounded-full opacity-50 blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contato;