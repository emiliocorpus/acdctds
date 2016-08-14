class PageController < ApplicationController
  def index
  	# @info = sort_combo({
  	# 	:scoring_details_derek => scoring_plays_by({:week => 12, :player_id => 16311}), 
  	# 	:scoring_details_amari => scoring_plays_by({:week => 2, :player_id =>16765})
  	# })
	derek = scoring_plays_by({:week => 12, :player_id => 16311})
	amari = scoring_plays_by({:week => 2, :player_id =>16765})
	binding.pry
  end

private
  # Derek Carr ID = 16311
  # Amari Cooper ID = 16765
  #SCORING DETAILS PER GAME
  def scoring_plays_by(obj={})
  	uri = URI("https://api.fantasydata.net/v3/nfl/pbp/json/PlayByPlay/2015PRE/0/ARZ")


  	uri.query = URI.encode_www_form({
  	})

  	request = Net::HTTP::Get.new(uri.request_uri)
  	# Request headers
  	request['Ocp-Apim-Subscription-Key'] = ENV['FANTASY_API_KEY']
  	# Request body
  	request.body = "{body}"

  	response = Net::HTTP.start(uri.host, uri.port, :use_ssl => uri.scheme == 'https') do |http|
  	    http.request(request)
  	end
  	x = JSON.parse(response.body)
  end

  def sort_combo(data={})
  	scoring_ids = collect_touchdown_ids(data)
  	scoring_plays_total = scoring_ids.count
  	non_combo_tds = scoring_ids.uniq.count
  	scoring_plays_total - non_combo_tds
  end
























  def collect_touchdown_ids(data={})
  	scoring_ids =[]
  	data[:scoring_details_derek].each do |scoring_detail|
  		if scoring_detail["ScoringType"] == 'PassingTouchdown'
  			scoring_ids.push(scoring_detail["ScoringDetailID"])
  		end
  	end

  	data[:scoring_details_amari].each do |scoring_detail|
  		if scoring_detail["ScoringType"] == 'ReceivingTouchdown'
  			scoring_ids.push(scoring_detail["ScoringDetailID"])
  		end
  	end

  	scoring_ids
  end


end

