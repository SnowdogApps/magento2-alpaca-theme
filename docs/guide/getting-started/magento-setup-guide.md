# Magento 2 Setup Guide
If you have Magento already set up, you can skip this guide.

To make working in local environment easier, we recommend using one of the tools listed below:
  * [Valet+](https://github.com/weprovide/valet-plus/wiki) - works on macOS. It doesn't use Vagrant or Docker but configures your Mac to always run Nginx in the background when your machine starts.
  * [Warden](https://docs.warden.dev/) - works on MacOS, Linux and Windows (WSL). It's based on Docker containers.

Of course you can run Magento 2 projects without those tools _(see [Magneto 2 docs](https://devdocs.magento.com/guides/v2.4/install-gde/composer.html))_, however in this guide we will be covering set up with Valet+ and Warden.

## Requirements
Make sure:
* You meet requirements needed to run Magento 2.4 projects:
  * See [system requirements](https://devdocs.magento.com/guides/v2.4/install-gde/system-requirements.html)
  * See [complete guide of prerequisites necessary to run Magento 2](https://devdocs.magento.com/guides/v2.4/install-gde/prereq/prereq-overview.html)
* You have Valet+ or Warden successfully installed

## Installation
### Valet+
1. Install Magento 2 Community Edition in your valet directory
    ```
    composer create-project --repository-url=https://repo.magento.com/ magento/project-community-edition <install-directory-name>
    ```
    Change `<install-directory-name>` to name of folder in which you wish to install your Magento project.

2. Create database
    * [See Magento docs](https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli-subcommands-db.html) of creating the database schema.
    * Run command bellow to create new database:
        ```
        valet db create <database_name>
        ```
    * See Valet Plus [database documentation.](https://github.com/weprovide/valet-plus/wiki/Database)
3. Configure database for Magento. Go to main directory of your project and run:
(adjust `project-name`)
    ````sh
    bin/magento setup:install   --db-host="127.0.0.1" \
                                --db-name="db-name" \
                                --db-user="db-user" \
                                --db-password="db-password" \
                                --base-url="http://project-name.test/" \
                                --admin-user="admin" \
                                --admin-password="Password123" \
                                --admin-email="name@example.com" \
                                --admin-firstname="Your First Name" \
                                --admin-lastname="Your Last Name"
    ````
    Adjust options:
      * `db` fields - name, password and root
      * Your project local URL and your admin credentials
4. Go to `app/etc/env.php` to check that all fields are properly set.
    * Set `frontName` to `admin`.
        * Example - `'frontName' => 'admin'` will result in `project-name.test/admin` as your admin panel URL.
    * Make sure that database fields are the same as you set in step 2.
    * Adjust rest of the fields according to your own needs.
    * See example `env.php` file below:
        ```php
        <?php
        return [
            'backend' => [
                'frontName' => 'admin'
            ],
            'db' => [
                'connection' => [
                    'indexer' => [
                        'host' => '127.0.0.1',
                        'dbname' => 'magento',
                        'username' => 'root',
                        'password' => 'root',
                        'active' => '1',
                        'persistent' => null,
                        'model' => 'mysql4',
                        'engine' => 'innodb',
                        'initStatements' => 'SET NAMES utf8;'
                    ],
                    'default' => [
                        'host' => '127.0.0.1',
                        'dbname' => 'magento',
                        'username' => 'root',
                        'password' => 'root',
                        'active' => '1',
                        'model' => 'mysql4',
                        'engine' => 'innodb',
                        'initStatements' => 'SET NAMES utf8;'
                    ]
                ],
                'table_prefix' => ''
            ],
            'crypt' => [
                'key' => 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
            ],
            'session' => [
                'save' => 'redis',
                'redis' => [
                    'host' => '/tmp/redis.sock',
                    'port' => '6379',
                    'password' => '',
                    'timeout' => '2.5',
                    'persistent_identifier' => '',
                    'database' => '0',
                    'compression_threshold' => '2048',
                    'compression_library' => 'gzip',
                    'log_level' => '1',
                    'max_concurrency' => '6',
                    'break_after_frontend' => '5',
                    'break_after_adminhtml' => '30',
                    'first_lifetime' => '600',
                    'bot_first_lifetime' => '60',
                    'bot_lifetime' => '7200',
                    'disable_locking' => '0',
                    'min_lifetime' => '60',
                    'max_lifetime' => '2592000'
                ]
            ],
            'cache' => [
                'frontend' => [
                    'default' => [
                        'backend' => 'Cm_Cache_Backend_Redis',
                        'backend_options' => [
                            'server' => '/tmp/redis.sock',
                            'port' => '6379',
                            'database' => '2'
                        ]
                    ],
                    'page_cache' => [
                        'backend' => 'Cm_Cache_Backend_Redis',
                        'backend_options' => [
                            'server' => '/tmp/redis.sock',
                            'port' => '6379',
                            'database' => '1',
                            'compress_data' => '0'
                        ]
                    ]
                ]
            ],
            'resource' => [
                'default_setup' => [
                    'connection' => 'default'
                ]
            ],
            'x-frame-options' => 'SAMEORIGIN',
            'MAGE_MODE' => 'developer',
            'cache_types' => [
                'config' => 1,
                'layout' => 1,
                'block_html' => 0,
                'collections' => 1,
                'reflection' => 1,
                'db_ddl' => 1,
                'eav' => 1,
                'full_page' => 0,
                'config_integration' => 1,
                'config_integration_api' => 1,
                'target_rule' => 1,
                'translate' => 1,
                'config_webservice' => 1,
                'compiled_config' => 0,
                'customer_notification' => 1
            ],
            'install' => [
                'date' => 'Wed, 19 Jul 2017 00:00:00 +0000'
            ],
            'queue' => [
                'amqp' => [
                    'host' => '',
                    'port' => '',
                    'user' => '',
                    'password' => '',
                    'virtualhost' => '/',
                    'ssl' => ''
                ]
            ]
        ];
        ```
5. Set up SSL (optional)
    * Run command bellow to enable secure URLs in both the customer-facing and admin-only areas of your store (adjust url value):
    ```
    bin/magento setup:store-config:set --use-secure=1 --base-url="https://project-name.test/"
    ```
    * Run command below for to Valet to serve the site over encrypted TLS using HTTP/2:
    ```
    valet secure
    ```

### Warden
1. Install Magento 2
    ```
    composer create-project --repository-url=https://repo.magento.com/ magento/project-community-edition <install-directory-name>
    ```
    Change `<instal-directory-name>` to name of folder in which you wish to install your Magento project.
2. Inside project directory run (adjust project-name):
    ```
    warden env-init project-name magento2
    ```
    It'll create project-specific .env file with configuration used by Warden & Docker.
3. Custmise `env` file according to your needs.<br />
    * You can change the used versions of services like **Composer**, **PHP**, **MariaDB**, etc. Here you can also toggle services: **Elasticsearch**, **Varnish**, **Redis**, **RabbitMQ** and disable those you don't need.
    * See example `env` file below:
        ```php
        <?php
            return [
                'backend' => [
                    'frontName' => 'admin'
                ],
                'remote_storage' => [
                    'driver' => 'file'
                ],
                'system' => [
                    'default' => [
                        'smile_elasticsuite_core_base_settings' => [
                            'es_client' => [
                                'servers' => 'elasticsearch:9200',
                                'enable_https_mode' => 0,
                                'enable_http_auth' => 0
                            ]
                        ],
                        'dev' => [
                            'js' => [
                                'merge_files' => 0,
                                'enable_js_bundling' => 0,
                                'minify_files' => 0
                            ],
                            'css' => [
                                'merge_css_files' => 0,
                                'minify_files' => 0
                            ],
                            'static' => [
                                'sign' => '0'
                            ]
                        ],
                        'web' => [
                            'cookie' => [
                                'cookie_domain' => 'project-name.test'
                            ],
                            'unsecure' => [
                                'base_url' => 'https://project-name.test/',
                                'base_link_url' => 'https://project-name.test/',
                                'base_static_url' => 'https://project-name.test/static/',
                                'base_media_url' => 'https://project-name.test/media/'
                            ],
                            'secure' => [
                                'base_url' => 'https://project-name.test/',
                                'base_link_url' => 'https://project-name.test/',
                                'base_static_url' => 'https://project-name.test/static/',
                                'base_media_url' => 'https://project-name.test/media/'
                            ],
                            'seo' => [
                                'use_rewrites' => '1'
                            ]
                        ]
                    ]
                ],
                'crypt' => [
                    'key' => 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx'
                ],
                'db' => [
                    'table_prefix' => '',
                    'connection' => [
                        'default' => [
                            'host' => 'db',
                            'dbname' => 'magento',
                            'username' => 'magento',
                            'password' => 'magento',
                            'model' => 'mysql4',
                            'engine' => 'innodb',
                            'initStatements' => 'SET NAMES utf8;',
                            'active' => '1',
                            'driver_options' => [
                                1014 => false
                            ]
                        ]
                    ]
                ],
                'resource' => [
                    'default_setup' => [
                        'connection' => 'default'
                    ]
                ],
                'session' => [
                    'save' => 'redis',
                    'redis' => [
                        'host' => 'redis',
                        'port' => '6379',
                        'password' => '',
                        'timeout' => '2.5',
                        'persistent_identifier' => '',
                        'database' => '2',
                        'compression_threshold' => '2048',
                        'compression_library' => 'gzip',
                        'log_level' => '1',
                        'max_concurrency' => '20',
                        'break_after_frontend' => '5',
                        'break_after_adminhtml' => '30',
                        'first_lifetime' => '600',
                        'bot_first_lifetime' => '60',
                        'bot_lifetime' => '7200',
                        'disable_locking' => '0',
                        'min_lifetime' => '60',
                        'max_lifetime' => '2592000',
                        'sentinel_master' => '',
                        'sentinel_servers' => '',
                        'sentinel_connect_retries' => '5',
                        'sentinel_verify_master' => '0'
                    ]
                ],
                'cache' => [
                    'frontend' => [
                        'default' => [
                            'id_prefix' => '69d_',
                            'backend' => 'Magento\\Framework\\Cache\\Backend\\Redis',
                            'backend_options' => [
                                'server' => 'redis',
                                'database' => '0',
                                'port' => '6379',
                                'password' => '',
                                'compress_data' => '1',
                                'compression_lib' => ''
                            ]
                        ],
                        'page_cache' => [
                            'id_prefix' => '69d_',
                            'backend' => 'Magento\\Framework\\Cache\\Backend\\Redis',
                            'backend_options' => [
                                'server' => 'redis',
                                'database' => '1',
                                'port' => '6379',
                                'password' => '',
                                'compress_data' => '0',
                                'compression_lib' => ''
                            ]
                        ]
                    ],
                    'allow_parallel_generation' => false
                ],
                'lock' => [
                    'provider' => 'db',
                    'config' => [
                        'prefix' => null
                    ]
                ],
                'install' => [
                    'date' => 'Wed, 18 Aug 2021 13:00:26 +0000'
                ]
            ];
        ```
4. Override mutagen config (Mac OS only)<br />
    By default for performance reasons Warden ignores sync (opens new window) for some paths like `pub/static`. To change that behavior override the mutagen config by adding in project's root `.warden/mutagen.yml` file with the following content:
    ```sh
    sync:
        defaults:
        mode: two-way-resolved
        symlink:
            mode: ignore
        watch:
            pollingInterval: 10
        ignore:
            vcs: false
            paths:
                # System files
                - ".DS_Store"
                - "._*"

                # Vim files
                - "*~"
                - "*.sw[a-p]"

                # Magento files
                - "/pub/media"

                # Frontend dependecies
                - "node_modules"

        permissions:
        defaultFileMode: "0644"
        defaultDirectoryMode: "0755"
    ```
5. Set up SSL and start project environment (adjust url):
    ```
    warden sign-certificate project-name.test
    warden env up
    ```
6. Create databse
    * [See Magento docs](https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli-subcommands-db.html) of creating the database schema.
    * See Warden [databse documentation.](https://docs.warden.dev/configuration/database.html)
    * Make sure database section in `env.php ` file is properly set.

## Configuration for development purposes
The following steps are common for Valet+ and Warden.

1. Disable 2FA and CSP for development purposes - run:
    ```
    bin/magento module:disable Magento_TwoFactorAuth Magento_Csp
    ```
2. Run command bellow to rewrite SEO and  make user friendly URLs:
    ```
    bin/magento config:set --lock-env web/seo/use_rewrites 1
    ```
3. Disable CSS and JS bundling
    ```
      bin/magento config:set --lock-env dev/js/merge_files 0
      bin/magento config:set --lock-env dev/js/minify_files 0
      bin/magento config:set --lock-env dev/css/minify_files 0
      bin/magento config:set --lock-env dev/css/merge_css_files 0
      bin/magento config:set --lock-env dev/static/sign 0
    ```
