import { Popover } from '@headlessui/react'

const navigation = {
  pages: [
    { name: 'Home', href: '/' }
  ],
}

export function NavBar() {
  
  return (
    <div className="bg-white sticky top-0">

      <header className="relative bg-white">

        <nav aria-label="Top" className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="/login" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Sign in
                  </a>
                </div>

              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export function DarkNavBar() {
  
  return (
    <div className="bg-white dark:bg-gray-900 sticky top-0">

      <header className="relative bg-white dark:bg-gray-900">

        <nav aria-label="Top" className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <div className="flex h-16 items-center">

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="/login" className="text-sm font-medium text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100">
                    Sign in
                  </a>
                </div>

              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}