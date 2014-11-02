#
# Cookbook Name:: go-sails
# Recipe:: default
#
# Copyright (C) 2014 YOUR_NAME
#
# All rights reserved - Do Not Redistribute
#

include_recipe "mysql::server"
include_recipe "mysql::client"

include_recipe 'nodejs::default'
