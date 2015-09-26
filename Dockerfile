FROM php:7-apache
RUN apt-get update && apt-get install -y \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libmcrypt-dev \
        libpng12-dev \
        libcurl4-openssl-dev  \
	libxml2-dev \
    && docker-php-ext-install iconv mcrypt \
    && docker-php-ext-install gd pdo_mysql mysqli curl  \
    && docker-php-ext-install  xml pdo pdo_mysql dom hash session tokenizer
RUN mkdir -p /usr/local/etc/php

COPY app/ /var/www/
