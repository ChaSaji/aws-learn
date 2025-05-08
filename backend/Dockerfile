FROM amazonlinux:2

RUN amazon-linux-extras install postgresql14

RUN yum install -y python3 python3-pip

WORKDIR /code

COPY ./requirements.txt /code/requirements.txt

RUN pip3 install -r requirements.txt

