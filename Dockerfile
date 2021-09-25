FROM ruby:2.6.6

ENV BUNDLER_VERSION=2.1.4

RUN apt-get update -y && apt-get install -y apt-transport-https

RUN apt-get --allow-releaseinfo-change update -y && apt-get install -y \
    gcc g++ make\
    vim \
    zlib1g-dev \
    build-essential \
    libssl-dev \
    default-mysql-client \
    git-core \
    cmake \
    libmariadb-dev

RUN gem install bundler -v $BUNDLER_VERSION

WORKDIR /backend

COPY Gemfile Gemfile.lock ./

RUN bundle config build.nokogiri --use-system-libraries

RUN bundle install
