(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{156:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return o})),t.d(e,"metadata",(function(){return s})),t.d(e,"rightToc",(function(){return u})),t.d(e,"default",(function(){return S}));var i=t(1),a=t(9),r=(t(0),t(213)),o={id:"configuration",title:"Configuration"},s={id:"reference/configuration",title:"Configuration",description:"\x3c!-- THIS FILE IS BEING AUTO-GENERATED. DO NOT MODIFY IT AS ALL CHANGES WILL BE OVERWRITTEN.",source:"@site/docs/reference/configuration.md",permalink:"/kratos/docs/next/reference/configuration",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/reference/configuration.md",version:"next",lastUpdatedBy:"hackerman",lastUpdatedAt:1586177162,sidebar:"docs",previous:{title:"After Jobs",permalink:"/kratos/docs/next/self-service/workflows/jobs/after"},next:{title:"JSON Schema and JSON Paths",permalink:"/kratos/docs/next/reference/json-schema-json-paths"}},u=[],l={rightToc:u};function S(n){var e=n.components,t=Object(a.a)(n,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"If file ",Object(r.b)("inlineCode",{parentName:"p"},"$HOME/.kratos.yaml")," exists, it will be used as a configuration file\nwhich supports all configuration settings listed below."),Object(r.b)("p",null,"You can load the config file from another source using the\n",Object(r.b)("inlineCode",{parentName:"p"},"-c path/to/config.yaml")," or ",Object(r.b)("inlineCode",{parentName:"p"},"--config path/to/config.yaml")," flag:\n",Object(r.b)("inlineCode",{parentName:"p"},"kratos --config path/to/config.yaml"),"."),Object(r.b)("p",null,"Config files can be formatted as JSON, YAML and TOML. Some configuration values\nsupport reloading without server restart. All configuration values can be set\nusing environment variables, as documented below."),Object(r.b)("p",null,"To find out more about edge cases like setting string array values through\nenvironmental variables head to the\n",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ory.sh/docs/ecosystem/configuring"}),"Configuring ORY services"),"\nsection."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),"## ORY Kratos Configuration\n#\n\n## dsn ##\n#\n# Set this value using environment variables on\n# - Linux/macOS:\n#    $ export DSN=<value>\n# - Windows Command Line (CMD):\n#    > set DSN=<value>\n#\ndsn: aliquip laborum\n\n## identity ##\n#\nidentity:\n  ## traits ##\n  #\n  traits:\n    ## default_schema_url ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export IDENTITY_TRAITS_DEFAULT_SCHEMA_URL=<value>\n    # - Windows Command Line (CMD):\n    #    > set IDENTITY_TRAITS_DEFAULT_SCHEMA_URL=<value>\n    #\n    default_schema_url: https://EiUFQsnSgPB.mhnyW7NOgm-lernJ5SKMhUnjIPTGfc8sDxa-+BQ0IfHJoByR9VneUmYnTiSo3cadFjLIgAa3V1\n\n    ## schemas ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export IDENTITY_TRAITS_SCHEMAS=<value>\n    # - Windows Command Line (CMD):\n    #    > set IDENTITY_TRAITS_SCHEMAS=<value>\n    #\n    schemas:\n      - 9732407.91456446\n\n## selfservice ##\n#\nselfservice:\n  ## logout ##\n  #\n  logout:\n    ## redirect_to ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_LOGOUT_REDIRECT_TO=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_LOGOUT_REDIRECT_TO=<value>\n    #\n    redirect_to: http://yccuglIeNaaqmLfqdqyKqExMXfusKUgdF.mtjDTTZLGeKaPFbeUE4\n\n  ## strategies ##\n  #\n  strategies:\n    ## password ##\n    #\n    password:\n      ## enabled ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_STRATEGIES_PASSWORD_ENABLED=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_STRATEGIES_PASSWORD_ENABLED=<value>\n      #\n      enabled: true\n\n    ## oidc ##\n    #\n    oidc:\n      ## enabled ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_STRATEGIES_OIDC_ENABLED=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_STRATEGIES_OIDC_ENABLED=<value>\n      #\n      enabled: true\n\n      ## config ##\n      #\n      config:\n        ## providers ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SELFSERVICE_STRATEGIES_OIDC_CONFIG_PROVIDERS=<value>\n        # - Windows Command Line (CMD):\n        #    > set SELFSERVICE_STRATEGIES_OIDC_CONFIG_PROVIDERS=<value>\n        #\n        providers:\n          - id: ullamco Ut\n            provider: google\n            client_id: anim proident adipisicing cupidatat\n            client_secret: Ut culpa ex\n            schema_url: https://XejJmGUKTYL.dchxyOFiAKD3AnB1JVTkFh1PZ9GTATmoSpFcwcuHLufcPjPrcTa,2b\n            issuer_url: http://YvEapTBNTALhAcXLsvSFJeFH.ghwN,9gq3n3FxXnB.I5H3URok+ay20gdOKopxfmNw74iUem8Ijdu\n            auth_url: http://ADHq.jtaVaC1R4d9\n            token_url: https://VQXCMIwqqyWbXSxflhxSzvRODcDw.ckrmuvyqRZFoT02GO\n            scope:\n              - cillum incididunt\n              - est nulla labore id\n              - dolor Ut\n          - id: dolore in ipsum velit magna\n            provider: github\n            client_id: fugiat Duis\n            client_secret: cupidatat enim tempor\n            schema_url: http://JsAUOHBpWwLjMIPUsw.pmkupsm1Ae.72U310s-sOpKpRj+jn1uBCRs1Tl7Pd\n            issuer_url: http://EVSfhTUVvCxebjVBzBGubZrXw.kmzF.21benQX5DVI8mBlphhPwkt35l2ze1\n            auth_url: https://KOTXGOgGZOdCzrDpJfvKMtnuQAVdoiA.plAAt6lr,Ekrg5Im8UAvbuN5SxUcadk+p\n            token_url: http://qKidYFtTmZBRnYeFbXFwa.tfnPLGrf0zurP3YZ640H9KtQqChIkg+CGAGJlpB6CGATg9PK1iFLzkl2k2o\n            scope:\n              - consectetur\n              - pariatur dolore eu officia\n              - in\n\n  ## profile ##\n  #\n  profile:\n    ## request_lifespan ##\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_PROFILE_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_PROFILE_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 5h\n\n    ## privileged_session_max_age ##\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_PROFILE_PRIVILEGED_SESSION_MAX_AGE=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_PROFILE_PRIVILEGED_SESSION_MAX_AGE=<value>\n    #\n    privileged_session_max_age: 8622618169h\n\n  ## verify ##\n  #\n  verify:\n    ## Self-Service Verification Request Lifespan ##\n    #\n    # Sets how long the verification request (for the UI interaction) is valid.\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_VERIFY_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_VERIFY_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 71497818m\n\n    ## Self-Service Verification Link Lifespan ##\n    #\n    # Sets how long the verification link (e.g. the one sent via email) is valid for.\n    #\n    # Default value: 24h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_VERIFY_LINK_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_VERIFY_LINK_LIFESPAN=<value>\n    #\n    link_lifespan: 73483050305s\n\n  ## login ##\n  #\n  login:\n    ## request_lifespan ##\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_LOGIN_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_LOGIN_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 134171226us\n\n    ## before ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_LOGIN_BEFORE=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_LOGIN_BEFORE=<value>\n    #\n    before:\n      - job: redirect\n        config:\n          default_redirect_url: http://EtfRCDZojd.tyUOsOYP8odrXyXFcEWzhaf6ZQqe9hJH1XH\n          allow_user_defined_redirect: true\n      - job: redirect\n        config:\n          default_redirect_url: https://uKFdsCEUTZNCt.cyLCq0QkYLHkGuTL\n          allow_user_defined_redirect: false\n      - job: redirect\n        config:\n          default_redirect_url: https://WXaUkWdmTrnwBRkecbJrEvBKwEqMUcaX.uwikcZZNqKyEgVzC9DuULTCEfBqHhmuu9UB+butHiGicw9\n          allow_user_defined_redirect: false\n      - job: redirect\n        config:\n          default_redirect_url: http://YgGS.thayy7K1fV9oEL6OrIDiIWtn+\n          allow_user_defined_redirect: true\n      - job: redirect\n        config:\n          default_redirect_url: https://rvGUdxhZdHy.tjlJdBlBeO1mIsdU0-IHwOe4Aog\n          allow_user_defined_redirect: true\n\n    ## after ##\n    #\n    after:\n      ## password ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_LOGIN_AFTER_PASSWORD=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_LOGIN_AFTER_PASSWORD=<value>\n      #\n      password:\n        - job: session\n        - job: revoke_active_sessions\n        - job: redirect\n          config:\n            default_redirect_url: http://zSPuuJJGpOplO.gmlfmorrudP5PGYwVCy9leMYcoUhJKHpR+Cmca6WsRFuyL6UBIVyj\n            allow_user_defined_redirect: false\n        - job: redirect\n          config:\n            default_redirect_url: http://DihBJhYaIx.ppagumSA2.8upp7cr2,IO17a8Rp8Xivm-Wluc2a0IIPaeBci\n            allow_user_defined_redirect: true\n        - job: redirect\n          config:\n            default_redirect_url: http://zTiUfT.gxeTPuDTxS7DBieMFaU,tm3NN.iubDpMQ6J+fom4xnIbh\n            allow_user_defined_redirect: true\n\n      ## oidc ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_LOGIN_AFTER_OIDC=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_LOGIN_AFTER_OIDC=<value>\n      #\n      oidc:\n        - job: redirect\n          config:\n            default_redirect_url: https://gSchIMRoJlbqIHXbjCAYwywjnFxjx.zfxlBQatr\n            allow_user_defined_redirect: false\n        - job: redirect\n          config:\n            default_redirect_url: https://yANEpbnyTDOfpYeCBmpVK.nzdaH7R86NQX8sw6W4bQ2WaYa0dNy-3sLGF1TAPL7JnYANt\n            allow_user_defined_redirect: false\n        - job: revoke_active_sessions\n        - job: redirect\n          config:\n            default_redirect_url: http://XplHWTbz.rplyX2xihMTh9QID0IERWKRLzEdd0PmpDCnnEoYLhrMn\n            allow_user_defined_redirect: false\n\n  ## registration ##\n  #\n  registration:\n    ## request_lifespan ##\n    #\n    # Default value: 1h\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_REGISTRATION_REQUEST_LIFESPAN=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_REGISTRATION_REQUEST_LIFESPAN=<value>\n    #\n    request_lifespan: 83712s\n\n    ## before ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SELFSERVICE_REGISTRATION_BEFORE=<value>\n    # - Windows Command Line (CMD):\n    #    > set SELFSERVICE_REGISTRATION_BEFORE=<value>\n    #\n    before:\n      - job: redirect\n        config:\n          default_redirect_url: http://YzrMSidVQKwbyumeZuEf.sfbbUw\n          allow_user_defined_redirect: false\n\n    ## after ##\n    #\n    after:\n      ## password ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_REGISTRATION_AFTER_PASSWORD=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_REGISTRATION_AFTER_PASSWORD=<value>\n      #\n      password:\n        - job: redirect\n          config:\n            default_redirect_url: https://qqsdQOkMk.wcdsmjEV9FwpCq9p0JeHBf5,OsUHau1hiei10Iq\n            allow_user_defined_redirect: true\n\n      ## oidc ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SELFSERVICE_REGISTRATION_AFTER_OIDC=<value>\n      # - Windows Command Line (CMD):\n      #    > set SELFSERVICE_REGISTRATION_AFTER_OIDC=<value>\n      #\n      oidc:\n        - job: redirect\n          config:\n            default_redirect_url: http://dLKUwRqodB.goll8gFevkEF-yGGUxGcG+15mjhWo2hBfeF9,ufkypngUDvWhDGLV.kCWxw15DZ\n            allow_user_defined_redirect: false\n        - job: verify\n        - job: session\n\n## Courier configuration ##\n#\n# The courier is responsible for sending and delivering messages over email, sms, and other means.\n#\ncourier:\n  ## SMTP Configuration ##\n  #\n  # Configures outgoing emails using the SMTP protocol.\n  #\n  smtp:\n    ## SMTP connection string ##\n    #\n    # This URI will be used to connect to the SMTP server.\n    #\n    # Examples:\n    # - smtps://foo:bar@my-mailserver:1234/\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export COURIER_SMTP_CONNECTION_URI=<value>\n    # - Windows Command Line (CMD):\n    #    > set COURIER_SMTP_CONNECTION_URI=<value>\n    #\n    connection_uri: smtps://foo:bar@my-mailserver:1234/\n\n    ## SMTP Sender Address ##\n    #\n    # The recipient of an email will see this as the sender address.\n    #\n    # Default value: no-reply@ory.kratos.sh\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export COURIER_SMTP_FROM_ADDRESS=<value>\n    # - Windows Command Line (CMD):\n    #    > set COURIER_SMTP_FROM_ADDRESS=<value>\n    #\n    from_address: lKS@ykcExsVRlAhvbHOhiInDpL.psu\n\n  ## Override message templates ##\n  #\n  # You can override certain or all message templates by pointing this key to the path where the templates are located.\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export COURIER_TEMPLATE_OVERRIDE_PATH=<value>\n  # - Windows Command Line (CMD):\n  #    > set COURIER_TEMPLATE_OVERRIDE_PATH=<value>\n  #\n  template_override_path: in minim eu aute nisi\n\n## serve ##\n#\nserve:\n  ## admin ##\n  #\n  admin:\n    ## host ##\n    #\n    # Default value: 0.0.0.0\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_ADMIN_HOST=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_ADMIN_HOST=<value>\n    #\n    host: commodo eiusmod\n\n    ## port ##\n    #\n    # Default value: 4434\n    #\n    # Examples:\n    # - 4434\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_ADMIN_PORT=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_ADMIN_PORT=<value>\n    #\n    port: 4434\n\n  ## public ##\n  #\n  public:\n    ## host ##\n    #\n    # Default value: 0.0.0.0\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_PUBLIC_HOST=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_PUBLIC_HOST=<value>\n    #\n    host: reprehenderit amet\n\n    ## port ##\n    #\n    # Default value: 4433\n    #\n    # Examples:\n    # - 4433\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_PUBLIC_PORT=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_PUBLIC_PORT=<value>\n    #\n    port: 4433\n\n## urls ##\n#\nurls:\n  ## profile_ui ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_PROFILE_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_PROFILE_UI=<value>\n  #\n  profile_ui: http://ICucFPFUoKqzJJZTuEXCqtChkZZD.ohyG8j8XTIuHl2GMQGeQBdl90zBzjcvl3ieJDcFirQqW0JnlaGG.+IiLemV6OFPZZiggwhhOQ3BcfYvZ\n\n  ## mfa_ui ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_MFA_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_MFA_UI=<value>\n  #\n  mfa_ui: http://IUPribccpbudsd.cwSQVIJ2mytiPB18y3Xn7hHHUwjkKpUl7Tmb-mR4vz.BwSADvZZfMcMNlHhondvUThxgYG\n\n  ## login_ui ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_LOGIN_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_LOGIN_UI=<value>\n  #\n  login_ui: https://PnMsRgOiQun.ooxuQAF4TZBLrC\n\n  ## registration_ui ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_REGISTRATION_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_REGISTRATION_UI=<value>\n  #\n  registration_ui: http://rbeigZxYoKQkmFKUI.rwbqT9o3ig..YEYI23zvpBLZNtFiUKfX1OFdAWFSpWVPVBXXZchDa,CJUOnb\n\n  ## error_ui ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_ERROR_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_ERROR_UI=<value>\n  #\n  error_ui: https://ZmKognTFcTFzU.mkrrUed0xz50I4Xr+eHnyu-8t\n\n  ## Verify User Interface URL ##\n  #\n  # The URL of the Verify User Interface, the page where users can request activate and / or verify their email or telephone number.\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_VERIFY_UI=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_VERIFY_UI=<value>\n  #\n  verify_ui: https://TtgUAGqPeDiZzQNvHpJiOPYzTyosAvgI.tplwF4F1O8JmqBjLjk6tH7U\n\n  ## default_return_to ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_DEFAULT_RETURN_TO=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_DEFAULT_RETURN_TO=<value>\n  #\n  default_return_to: https://iqxZkKwFjloOkCeUh.fzjZp2RpD1V-XCdcd5cEzs.h26+xNqHB8XoYaojc8wuzz\n\n  ## self ##\n  #\n  self:\n    ## public ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export URLS_SELF_PUBLIC=<value>\n    # - Windows Command Line (CMD):\n    #    > set URLS_SELF_PUBLIC=<value>\n    #\n    public: https://WXb.ntkxRx82LOslEQDyTnpxn.gfFiCT3xoGQYXRPyL7hCu9303Nhzq2Pr9I\n\n    ## admin ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export URLS_SELF_ADMIN=<value>\n    # - Windows Command Line (CMD):\n    #    > set URLS_SELF_ADMIN=<value>\n    #\n    admin: https://UhaDesdxPvXYEuBFTjbmNxTPnnx.zeab4P+Ujk3kZuDkJTbB-N2Lu2qqIUUdmJDnPbR\n\n  ## whitelisted_return_to_domains ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_WHITELISTED_RETURN_TO_DOMAINS=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_WHITELISTED_RETURN_TO_DOMAINS=<value>\n  #\n  whitelisted_return_to_domains:\n    - http://aAIMWIgbgBWmjA.zyosH,UGLvzn2E1LrmUf.kQ5o96tDT-C27VeFjQr,JEpqI\n    - http://WYYCLQFrJobt.cyxrMux1TmkLz4,.4XrTr4IZR5\n    - http://FAtblosTpavNPwTCcLFOyniL.lpjUt.iFvd0myg\n    - https://mhXEnuGIGrnFzoxqpjmZ.gsDjMmMYHAFK690Wn9RdQOspy\n\n## log ##\n#\nlog:\n  ## level ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export LOG_LEVEL=<value>\n  # - Windows Command Line (CMD):\n  #    > set LOG_LEVEL=<value>\n  #\n  level: error\n\n  ## format ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export LOG_FORMAT=<value>\n  # - Windows Command Line (CMD):\n  #    > set LOG_FORMAT=<value>\n  #\n  format: text\n\n## secrets ##\n#\nsecrets:\n  ## session ##\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export SECRETS_SESSION=<value>\n  # - Windows Command Line (CMD):\n  #    > set SECRETS_SESSION=<value>\n  #\n  session:\n    - anim estcommodo magna elit cillum consequat\n    - laborum elit doelit reprehenderit\n\n## hashers ##\n#\nhashers:\n  ## argon2 ##\n  #\n  argon2:\n    ## memory ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_MEMORY=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_MEMORY=<value>\n    #\n    memory: 8262840\n\n    ## iterations ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_ITERATIONS=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_ITERATIONS=<value>\n    #\n    iterations: 73733475\n\n    ## parallelism ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_PARALLELISM=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_PARALLELISM=<value>\n    #\n    parallelism: 31200730\n\n    ## salt_length ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_SALT_LENGTH=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_SALT_LENGTH=<value>\n    #\n    salt_length: 84780364\n\n    ## key_length ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export HASHERS_ARGON2_KEY_LENGTH=<value>\n    # - Windows Command Line (CMD):\n    #    > set HASHERS_ARGON2_KEY_LENGTH=<value>\n    #\n    key_length: 39399919\n\n## security ##\n#\nsecurity:\n  ## session ##\n  #\n  session:\n    ## cookie ##\n    #\n    cookie:\n      ## same_site ##\n      #\n      # Default value: Lax\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SECURITY_SESSION_COOKIE_SAME_SITE=<value>\n      # - Windows Command Line (CMD):\n      #    > set SECURITY_SESSION_COOKIE_SAME_SITE=<value>\n      #\n      same_site: Lax\n")))}S.isMDXComponent=!0},213:function(n,e,t){"use strict";t.d(e,"a",(function(){return _})),t.d(e,"b",(function(){return d}));var i=t(0),a=t.n(i);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,i,a=function(n,e){if(null==n)return{};var t,i,a={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var l=a.a.createContext({}),S=function(n){var e=a.a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):s({},e,{},n)),t},_=function(n){var e=S(n.components);return a.a.createElement(l.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return a.a.createElement(a.a.Fragment,{},e)}},m=Object(i.forwardRef)((function(n,e){var t=n.components,i=n.mdxType,r=n.originalType,o=n.parentName,l=u(n,["components","mdxType","originalType","parentName"]),_=S(t),m=i,d=_["".concat(o,".").concat(m)]||_[m]||c[m]||r;return t?a.a.createElement(d,s({ref:e},l,{components:t})):a.a.createElement(d,s({ref:e},l))}));function d(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=n,s.mdxType="string"==typeof n?n:i,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);