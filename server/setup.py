from setuptools import setup

setup(
    name="webserver",
    packages=["webserver"],
    include_package_data=True,
    install_requires=[
        "flask",
    ],
)
