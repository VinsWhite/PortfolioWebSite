import { useTranslation } from "react-i18next"

export default function FormComp() {
    const [t] = useTranslation("global");
    
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-20">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900">{t("getintouch.title")}</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              {t("getintouch.name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {t("getintouch.email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                {t("getintouch.message")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="resize-none block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-secondary rounded-md shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {t("getintouch.button")}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
