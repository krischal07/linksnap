export default function Footer() {
    return (
      <footer className="bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-medium mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">API</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Guides</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Partners</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Terms</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Security</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Cookies</a></li>
            </ul>
          </div>
        </div> */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <div className="h-8 w-8 mr-2">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                <circle cx="7" cy="7" r="3" fill="#0EA5E9" />
                <circle cx="17" cy="7" r="3" fill="#ffffff" />
                <circle cx="7" cy="17" r="3" fill="#ffffff" />
                <circle cx="17" cy="17" r="3" fill="#ffffff" />
              </svg>
            </div>
            <span className="text-white font-bold text-xl">LinkSnap</span>
          </div>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">© 2025 Linksnap. All rights reserved.</p>
        </div>
      </div>
    </footer>
    );
  }