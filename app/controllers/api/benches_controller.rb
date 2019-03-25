class Api::BenchesController < ApplicationController


    def index 
        # debugger
        mins = params[:min_seating] || 0
        maxs = params[:max_seating] || 100
        # :max_seating, :min_seating
        @benches = Bench.in_bounds(params[:bounds], mins, maxs)
        
        render :index
    end

    def create 
        # debugger
        bench_params['seating'] = bench_params['seating'].to_i
        @bench = Bench.new(bench_params)
        if @bench.save
            render :show
          else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def show 
        @bench = Bench.find_by(id: params[:id])
        render :show
    end


    private 
    def bench_params
        params.require(:bench).permit(:description, :lat, :lng, :seating)
    end
end
