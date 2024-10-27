const Card = () => {
  return (
    <li className="transition duration-300 ease-in-out opacity-100 transform" style={{ transition: '0.25s cubic-bezier(0.645, 0.045, 0.355, 1)' }}>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <header>
          <div className="flex items-center justify-between mb-4">
            <div className="folder">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-folder w-6 h-6 text-gray-600"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div className="project-links">
              <a
                href="https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c"
                aria-label="External Link"
                className="external"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link w-6 h-6 text-gray-600"
                >
                  <title>External Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">
            <a
              href="https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Integrating Algolia Search with WordPress Multisite
            </a>
          </h3>
          <div className="project-description mb-4">
            <p className="text-gray-700">Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
          </div>
        </header>
        <footer>
          <ul className="flex space-x-2">
            <li className="text-sm text-gray-600">Algolia</li>
            <li className="text-sm text-gray-600">WordPress</li>
            <li className="text-sm text-gray-600">PHP</li>
          </ul>
        </footer>
      </div>
    </li>
  );
};

export default Card;
