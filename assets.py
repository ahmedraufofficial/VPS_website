from flask_assets import Bundle

bundles = {
    'home_css': Bundle(
        'css/style1.scss',
        filters='libsass',
        depends='css/*.scss',
        output='gen/home.%(version)s.css'
    )
}