import { motion } from 'framer-motion';
import { MessageCircle, MapPin, ShoppingCart, LayoutDashboard } from 'lucide-react';

export default function RestaurantWebsite() {
  const whatsappNumber = '919336177375';
  const whatsappMessage = encodeURIComponent('Hello The Running Table, I would like to book a table.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const orderUrl = '#online-order';
  const adminUrl = '/admin';
  const menuItems = [
    {
      name: 'Paneer Tikka',
      subtitle: '100% Pure Veg Starter',
      image:
        'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Shahi Paneer',
      subtitle: 'North Indian Special',
      image:
        'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Veg Noodles',
      subtitle: 'Chinese Delights',
      image:
        'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Masala Dosa',
      subtitle: 'South Indian Favorite',
      image:
        'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Veg Pizza',
      subtitle: 'Freshly Baked',
      image:
        'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Gulab Jamun',
      subtitle: 'Sweet Ending',
      image:
        'https://images.unsplash.com/photo-1605197161470-5a1f4c4d0fd0?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80',
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans scroll-smooth">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold text-xl shadow-lg">
              🍽️
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-yellow-400">
                The Running Table
              </h1>
              <p className="text-xs text-gray-300">Pure Veg Restaurant</p>
            </div>
          </motion.div>

          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
            {['home', 'about', 'menu', 'gallery', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="hover:text-yellow-400 transition"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#reservation"
            className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
          >
            Book Table
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/75" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-5xl pt-24"
        >
          <p className="text-yellow-400 uppercase tracking-[0.35em] mb-4 text-sm md:text-base">
            Pure Veg Restaurant
          </p>

          <h2 className="text-5xl md:text-8xl font-extrabold leading-tight mb-6">
            Welcome to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
              The Running Table
            </span>
          </h2>

          <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Great Food • Great Ambience • Great Experience
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
              Explore Menu
            </a>
            <a
              href="#reservation"
              className="border border-white/30 px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
            >
              Reserve Now
            </a>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <motion.section
        id="about"
        className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80"
          alt="Restaurant interior"
          className="rounded-3xl shadow-2xl"
        />

        <div>
          <p className="text-yellow-400 uppercase tracking-widest mb-2">About Us</p>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Amazing Location & Beautiful Ambience
          </h3>
          <p className="text-gray-300 leading-8 mb-6 text-lg">
            The Running Table is a premium pure veg restaurant located in Jaj Mau,
            Kanpur. We serve a wide variety of delicious vegetarian dishes in a
            luxurious and family-friendly atmosphere.
          </p>

          <div className="space-y-2 text-gray-300">
            <p>📍 The Running Table, Jaj Mau, Kanpur, Uttar Pradesh, India</p>
            <p>📞 +91 93361 77375</p>
            <p>🕒 Open Daily: 11:00 AM - 11:00 PM</p>
          </div>
        </div>
      </motion.section>

      {/* Menu */}
      <section id="menu" className="bg-zinc-950 py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-yellow-400 uppercase tracking-widest mb-2">
            Our Menu
          </p>
          <h3 className="text-4xl md:text-5xl font-bold mb-12">
            All Restaurant Items Available (Only Veg)
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-900 rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-2xl font-semibold mb-2">{item.name}</h4>
                  <p className="text-yellow-400">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="max-w-7xl mx-auto px-6 py-24">
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Restaurant Gallery
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`Gallery ${i + 1}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-3xl h-72 w-full object-cover"
            />
          ))}
        </div>
      </section>

      {/* Reservation */}
      <section id="reservation" className="bg-zinc-950 py-24 px-6">
        <div className="max-w-3xl mx-auto bg-zinc-900 rounded-3xl p-10 shadow-2xl">
          <h3 className="text-4xl font-bold text-center mb-8">Book a Table</h3>

          <form className="grid gap-4">
            <input
              className="p-4 rounded-xl bg-zinc-800 border border-zinc-700"
              placeholder="Your Name"
            />
            <input
              className="p-4 rounded-xl bg-zinc-800 border border-zinc-700"
              placeholder="Phone Number"
            />
            <input
              type="date"
              className="p-4 rounded-xl bg-zinc-800 border border-zinc-700"
            />
            <input
              type="time"
              className="p-4 rounded-xl bg-zinc-800 border border-zinc-700"
            />

            <button
              type="button"
              onClick={() => alert('Reservation request submitted successfully!')}
              className="bg-yellow-400 text-black py-4 rounded-xl font-bold hover:scale-105 transition"
            >
              Confirm Reservation
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
            {/* Quick Action Buttons */}
      <div className="fixed right-4 bottom-6 z-50 flex flex-col gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-2xl hover:scale-110 transition"
          title="WhatsApp Booking"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </a>

        <a
          href="https://maps.google.com/?q=Jaj+Mau+Kanpur+Uttar+Pradesh+India"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center shadow-2xl hover:scale-110 transition"
          title="View on Google Maps"
        >
          <MapPin className="w-7 h-7 text-white" />
        </a>

        <a
          href={orderUrl}
          className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center shadow-2xl hover:scale-110 transition"
          title="Online Ordering"
        >
          <ShoppingCart className="w-7 h-7 text-black" />
        </a>

        <a
          href={adminUrl}
          className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center shadow-2xl hover:scale-110 transition"
          title="Admin Dashboard"
        >
          <LayoutDashboard className="w-7 h-7 text-white" />
        </a>
      </div>

      {/* Google Maps */}
      <section className="bg-zinc-950 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Find Us on Google Maps
          </h3>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-zinc-800">
            <iframe
              title="The Running Table Location"
              src="https://www.google.com/maps?q=Jaj%20Mau%20Kanpur%20Uttar%20Pradesh%20India&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Online Ordering */}
      <section id="online-order" className="bg-black py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-yellow-400 uppercase tracking-widest mb-2">
            Online Ordering
          </p>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Order Your Favorite Veg Dishes Online
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            Customers can place orders directly through WhatsApp or future payment integrations such as Razorpay and UPI.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition"
          >
            <ShoppingCart className="w-5 h-5" />
            Order Now
          </a>
        </div>
      </section>

      {/* Admin Dashboard Preview */}
      <section id="admin-preview" className="bg-zinc-950 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-yellow-400 uppercase tracking-widest mb-2 text-center">
            Admin Dashboard
          </p>
          <h3 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Manage Orders, Reservations & Customers
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              ['Today Orders', '128'],
              ['Reservations', '42'],
              ['Customers', '1,245'],
              ['Revenue', '₹54,300'],
            ].map(([label, value]) => (
              <div
                key={label}
                className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 shadow-xl text-center"
              >
                <p className="text-gray-400 text-sm">{label}</p>
                <p className="text-3xl font-bold text-yellow-400 mt-2">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="bg-black border-t border-zinc-800 py-12 px-6 text-center"
      >
        <h4 className="text-3xl font-bold text-yellow-400 mb-4">
          The Running Table
        </h4>
        <p className="text-gray-400 mb-2">Pure Veg Restaurant</p>
        <p className="text-gray-400 mb-2">
          Jaj Mau, Kanpur, Uttar Pradesh, India
        </p>
        <p className="text-gray-400 mb-2">+91 93361 77375</p>
        <p className="text-gray-400 mb-6">therunningtable@gmail.com</p>
        <p className="text-gray-600 text-sm">
          © 2026 The Running Table. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
