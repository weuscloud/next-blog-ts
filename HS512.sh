#!/bin/bash
echo -n "somevalue" | openssl sha512 -hmac "somekey"
